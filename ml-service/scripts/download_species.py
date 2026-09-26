import requests
import pandas as pd
import urllib3

urllib3.disable_warnings()

species_list = []

limit = 100
offset = 0

print("Downloading animal species...")

while len(species_list) < 5000:

    url = f"https://api.gbif.org/v1/species/search?rank=SPECIES&kingdom=Animalia&phylum=Chordata&limit={limit}&offset={offset}"

    response = requests.get(url, verify=False)
    data = response.json()

    for item in data["results"]:

        if "scientificName" in item:

            species_list.append({
                "scientific_name": item.get("scientificName"),
                "canonical_name": item.get("canonicalName"),
                "kingdom": item.get("kingdom")
            })

    offset += limit

    print("Downloaded:", len(species_list))

df = pd.DataFrame(species_list)

df = df.drop_duplicates()

df.to_csv("data/species.csv", index=False)

print("Saved species.csv with", len(df), "animal species")