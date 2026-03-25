import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer

print("Loading dataset...")

df = pd.read_csv("data/species.csv")

descriptions = df["description"].tolist()

print("Loading NLP model...")
model = SentenceTransformer("all-MiniLM-L6-v2")

print("Generating embeddings...")

embeddings = model.encode(descriptions)

np.save("data/species_embeddings.npy", embeddings)

print("Embeddings saved successfully!")