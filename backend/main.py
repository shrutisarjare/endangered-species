import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(BASE_DIR, "data", "india_terrestrial_animals.csv")

df = pd.read_csv(CSV_PATH)
df.columns = df.columns.str.strip()


@app.get("/")
def root():
    return {"message": "API running"}


@app.get("/animal/{state}/{animal}")
def get_animals(state: str, animal: str):

    state = state.lower()
    animal = animal.lower()

    results = df[
        (df["state"].str.lower() == state) &
        (df["animal_type"].str.lower() == animal)
    ]

    animals = []

    for _, row in results.iterrows():
        scientific = row["scientific_name"].replace(" ", "_")
        image_url = f"https://en.wikipedia.org/wiki/Special:FilePath/{scientific}.jpg"

        animals.append({
            "name": row["animal_name"],
            "scientific_name": row["scientific_name"],
            "location": row["habitat_location"],
            "status": row["status"],
            "image": image_url
        })

    return animals


@app.get("/analysis/{name}")
def species_analysis(name: str):

    name = name.lower()

    result = df[df["animal_name"].str.lower() == name]

    if result.empty:
        return {"error": "Species not found"}

    row = result.iloc[0]

    # ---------------------------
    # MACHINE LEARNING PREDICTION
    # ---------------------------

    years = np.array([2014, 2016, 2018, 2020, 2022, 2024]).reshape(-1, 1)

    population = np.array([
        int(row["population_2014"]),
        int(row["population_2016"]),
        int(row["population_2018"]),
        int(row["population_2020"]),
        int(row["population_2022"]),
        int(row["population_2024"])
    ])

    model = LinearRegression()
    model.fit(years, population)

    future_years = np.array([[2026], [2028]])
    predictions = model.predict(future_years)

    # ---------------------------
    # TREND DETECTION
    # ---------------------------

    slope = model.coef_[0]

    if slope > 0:
        trend = "Increasing"
    elif slope < 0:
        trend = "Declining"
    else:
        trend = "Stable"

    # ---------------------------
    # RISK LEVEL DETECTION
    # ---------------------------

    latest_population = population[-1]

    if latest_population < 250:
        risk = "Critical"
    elif latest_population < 2500:
        risk = "Endangered"
    elif latest_population < 10000:
        risk = "Vulnerable"
    else:
        risk = "Stable"

    # ---------------------------
    # AUTOMATIC IMAGE DETECTION
    # ---------------------------

    scientific = row["scientific_name"].replace(" ", "_")
    image_url = f"https://en.wikipedia.org/wiki/Special:FilePath/{scientific}.jpg"

    try:
        wiki_api = f"https://en.wikipedia.org/api/rest_v1/page/summary/{scientific.replace(' ', '_')}"
        response = requests.get(wiki_api).json()

        if "thumbnail" in response:
            image_url = response["thumbnail"]["source"]

    except:
        image_url = None

    if not image_url:
        image_url = f"https://source.unsplash.com/600x400/?{scientific.replace(' ', '%20')}"

    # ---------------------------
    # RETURN RESPONSE
    # ---------------------------

    return {
        "species": row["animal_name"],
        "scientific_name": row["scientific_name"],
        "state": row["state"],
        "image": image_url,

        "population_history": [
            {"year": 2014, "population": int(population[0])},
            {"year": 2016, "population": int(population[1])},
            {"year": 2018, "population": int(population[2])},
            {"year": 2020, "population": int(population[3])},
            {"year": 2022, "population": int(population[4])},
            {"year": 2024, "population": int(population[5])}
        ],

        "predictions": [
            {"year": 2026, "population": int(predictions[0])},
            {"year": 2028, "population": int(predictions[1])}
        ],

        "trend": trend,
        "risk_level": risk
    }