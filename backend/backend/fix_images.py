import pandas as pd
import requests

df = pd.read_csv("data/raw/india_terrestrial_animals.csv")
df.columns = df.columns.str.strip()

headers = {
    "User-Agent": "Mozilla/5.0"
}

def get_wiki_image(animal):
    try:
        name = animal.split("(")[0].strip().replace(" ", "_")

        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{name}"
        res = requests.get(url, headers=headers)

        if res.status_code == 200:
            data = res.json()

            if "originalimage" in data:
                original = data["originalimage"]["source"]

                # 🔥 CONVERT TO THUMBNAIL HERE
                if "upload.wikimedia.org" in original:
                    parts = original.split("/commons/")
                    path = parts[1]
                    filename = path.split("/")[-1]

                    thumb = f"https://upload.wikimedia.org/wikipedia/commons/thumb/{path}/400px-{filename}"
                    return thumb

        return ""

    except:
        return ""

df["image_url"] = df["animal_name"].apply(get_wiki_image)

df.to_csv("data/processed/india_terrestrial_animals.csv", index=False)

print("✅ FINAL OPTIMIZED DATASET CREATED")