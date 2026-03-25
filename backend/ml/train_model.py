import os
import sys
import numpy as np
import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Fix path
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(BASE_DIR)

from utils.audio_features import extract_features

# Load metadata
CSV_PATH = os.path.join(os.path.dirname(__file__), "esc50.csv")
metadata = pd.read_csv(CSV_PATH)

# Only animal categories
ANIMAL_CLASSES = [
    "dog", "rooster", "pig", "cow",
    "frog", "cat", "hen", "insects",
    "sheep", "crow"
]

metadata = metadata[metadata["category"].isin(ANIMAL_CLASSES)]

DATASET_PATH = os.path.join(os.path.dirname(__file__), "dataset", "audio")

X = []
y = []

print("Training only animal sounds...")

for _, row in metadata.iterrows():
    file_name = row["filename"]
    label = row["category"]
    file_path = os.path.join(DATASET_PATH, file_name)

    try:
        features = extract_features(file_path)
        X.append(features)
        y.append(label)
    except:
        pass

X = np.array(X)
y = np.array(y)

print("Total samples:", len(X))

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print("Accuracy:", round(accuracy * 100, 2), "%")

joblib.dump(model, os.path.join(os.path.dirname(__file__), "animal_model.pkl"))

print("Model retrained successfully.")