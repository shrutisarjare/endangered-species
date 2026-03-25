import cv2
from ultralytics import YOLO

model = YOLO("yolov8n.pt")

def predict_video(video_path):

    cap = cv2.VideoCapture(video_path)

    predictions = []

    while True:

        ret, frame = cap.read()

        if not ret:
            break

        results = model(frame)

        names = model.names

        cls = results[0].boxes.cls[0]

        predictions.append(names[int(cls)])

    cap.release()

    return max(set(predictions), key=predictions.count)