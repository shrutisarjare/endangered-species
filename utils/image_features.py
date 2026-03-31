from PIL import Image
import numpy as np

def extract_features(image_path):
    img = Image.open(image_path).convert("RGB")
    img = img.resize((64, 64))
    arr = np.array(img) / 255.0
    return arr.flatten()
