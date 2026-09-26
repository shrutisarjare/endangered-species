import os
import json
import numpy as np
from utils.image_features import extract_features

DATASET_PATH = "../database/dataset/images"
OUTPUT_PATH = "../database/generated"

os.makedirs(OUTPUT_PATH, exist_ok=True)

embeddings = []
labels = []

for species in os.listdir(DATASET_PATH):
    species_path = os.path.join(DATASET_PATH, species)
    if not os.path.isdir(species_path):
        continue

    for img in os.listdir(species_path)[:30]:
        img_path = os.path.join(species_path, img)
        try:
            vec = extract_features(img_path)
            embeddings.append(vec)
            labels.append(species)
        except:
            pass

np.save(os.path.join(OUTPUT_PATH, "image_embeddings.npy"), embeddings)

with open(os.path.join(OUTPUT_PATH, "image_labels.json"), "w") as f:
    json.dump(labels, f)

print("✅ Image database created successfully")
