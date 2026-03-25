import shutil
from typing import Optional
from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from services.species_info import get_species_info
# Models
from models.text_model import predict_species
from models.species_identifier import identify_species
#from models.audio_model import predict_audio
from models.video_model import predict_video
from fastapi import FastAPI
from routes.predict_image import router as image_router


app = FastAPI()
app.include_router(image_router)
# CORS (needed for frontend requests)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextInput(BaseModel):
    text: str


@app.get("/")
def home():
    return {"message": "ML service running"}


# ================= TEXT IDENTIFICATION =================
@app.post("/identify-text")
def identify_text(data: TextInput):

    species = predict_species(data.text)

    return {"species": species}


# ================= IMAGE IDENTIFICATION =================
@app.post("/identify-image")
async def identify_image(file: UploadFile = File(...)):

    path = f"temp/{file.filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = identify_species(path)

    return result


# ================= AUDIO IDENTIFICATION =================
'''@app.post("/identify-audio")
async def identify_audio(file: Optional[UploadFile] = File(None)):

    if file is None:
        return {"error": "No audio uploaded"}

    path = f"temp/{file.filename}"

    with open(path, "wb") as f:
        f.write(await file.read())

    species = predict_audio(path)

    return {"species": species}'''


# ================= VIDEO IDENTIFICATION =================
@app.post("/identify-video")
async def identify_video(file: Optional[UploadFile] = File(None)):

    if file is None:
        return {"error": "No video uploaded"}

    path = f"temp/{file.filename}"

    with open(path, "wb") as f:
        f.write(await file.read())

    species = predict_video(path)

    return {"species": species}

@app.get("/species/{name}")
def species_info(name: str):

    info = get_species_info(name)

    return info