import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

print("Loading species dataset...")
df = pd.read_csv("data/species.csv")

print("Loading embeddings...")
embeddings = np.load("data/species_embeddings.npy")

print("Loading NLP model...")
model = SentenceTransformer("all-MiniLM-L6-v2")

def predict_species(text):

    query_embedding = model.encode([text])

    scores = cosine_similarity(query_embedding, embeddings)[0]

    idx = scores.argmax()

    result = df.iloc[idx]

    return {
        "scientific_name": result["scientific_name"],
        "common_name": result["common_name"]
    }