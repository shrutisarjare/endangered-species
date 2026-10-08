import torch
import clip
import json
from PIL import Image

device = "cuda" if torch.cuda.is_available() else "cpu"

model, preprocess = clip.load("ViT-B/32", device=device)

with open("data/species_taxonomy.json") as f:
    species_data = json.load(f)

species_labels = [s["common_name"] for s in species_data]

# Multiple prompts per animal
prompts = []
for label in species_labels:
    prompts.append(f"a photo of a {label}")
    prompts.append(f"a wildlife photo of a {label}")
    prompts.append(f"a close-up photo of a {label}")

text_inputs = clip.tokenize(prompts).to(device)

with torch.no_grad():
    text_features = model.encode_text(text_inputs)

text_features /= text_features.norm(dim=-1, keepdim=True)

def predict_image(image_path):

    image = preprocess(Image.open(image_path)).unsqueeze(0).to(device)

    with torch.no_grad():

        image_features = model.encode_image(image)

        # Normalize features
        image_features /= image_features.norm(dim=-1, keepdim=True)

        similarity = (100 * image_features @ text_features.T).softmax(dim=-1)

        values, indices = similarity[0].topk(3)

    predictions = []

    for score, idx in zip(values, indices):

        species = species_labels[idx.item()]
        animal_type = species_taxonomy.get(species, "unknown")

        predictions.append({
            "species": species,
            "type": animal_type,
            "confidence": float(score)
        })

    return predictions