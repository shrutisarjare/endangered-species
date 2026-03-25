from ultralytics import YOLO

print("Loading YOLO model...")

model = YOLO("yolov8n.pt")

def detect_animal(image_path):

    results = model(image_path)

    for r in results:
        for box in r.boxes:
            cls = int(box.cls[0])
            label = model.names[cls]

            return label

    return "unknown"