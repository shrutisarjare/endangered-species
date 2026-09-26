import json

def get_conservation_info(species):

    with open("data/species_conservation.json") as f:
        data = json.load(f)

    species = species.lower()

    if species in data:
        return data[species]

    return {
        "scientific_name": "Unknown",
        "status": "Unknown",
        "habitat": "Unknown",
        "population_trend": "Unknown",
        "threats": "Unknown"
    }