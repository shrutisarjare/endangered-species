import os
from PIL import Image
import imagehash

# Absolute path to dataset (CONFIRMED)
DATASET_PATH = r"D:\endangered-species\database\dataset\raw-img"


def get_image_hash(image_path):
    try:
        img = Image.open(image_path).convert("RGB")
        return imagehash.phash(img)
    except Exception:
        return None


def identify_species(uploaded_image_path):
    uploaded_hash = get_image_hash(uploaded_image_path)

    if uploaded_hash is None:
        return "Unknown", None

    best_species = "Unknown"
    best_distance = float("inf")

    for species in os.listdir(DATASET_PATH):
        species_folder = os.path.join(DATASET_PATH, species)

        if not os.path.isdir(species_folder):
            continue

        for img_name in os.listdir(species_folder):
            if not img_name.lower().endswith((".jpg", ".jpeg", ".png")):
                continue

            img_path = os.path.join(species_folder, img_name)
            dataset_hash = get_image_hash(img_path)

            if dataset_hash is None:
                continue

            distance = uploaded_hash - dataset_hash

            if distance < best_distance:
                best_distance = distance
                best_species = species

    return best_species, best_distance
