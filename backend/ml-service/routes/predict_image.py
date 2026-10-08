from fastapi import APIRouter, UploadFile, File
import shutil
from models.image_model import predict_image

router = APIRouter()

@router.post("/predict/image")

async def predict(file: UploadFile = File(...)):

    path = f"temp/{file.filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predict_image(path)

    return result