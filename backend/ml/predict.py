from pydub import AudioSegment
AudioSegment.converter = r"C:\Users\Mona\ffmpeg-8.0.1-essentials_build\bin\ffmpeg.exe"
from pydub.utils import which

import sys
import os
import numpy as np
import joblib
import speech_recognition as sr

AudioSegment.converter = which("ffmpeg")
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(BASE_DIR)

from utils.audio_features import extract_features

MODEL_PATH = os.path.join(os.path.dirname(__file__), "animal_model.pkl")
model = joblib.load(MODEL_PATH)

SPEECH_MAP = {
    "meow": "cat",
    "woof": "dog",
    "bark": "dog",
    "moo": "cow",
    "oink": "pig"
}

def convert_to_wav(file_path):
    sound = AudioSegment.from_file(file_path)
    wav_path = file_path + "_converted.wav"
    sound.export(wav_path, format="wav")
    return wav_path

def speech_fallback(file_path):
    try:
        wav_file = convert_to_wav(file_path)

        recognizer = sr.Recognizer()
        with sr.AudioFile(wav_file) as source:
            audio = recognizer.record(source)

        text = recognizer.recognize_google(audio).lower()
        print("Speech recognized:", text)

        for word in SPEECH_MAP:
            if word in text:
                return SPEECH_MAP[word]

        return text

    except Exception as e:
        print("Speech error:", e)
        return None


def predict_audio(file_path):
    try:
        features = extract_features(file_path)
        features = np.array(features).reshape(1, -1)

        probabilities = model.predict_proba(features)[0]
        max_prob = np.max(probabilities)

        if max_prob > 0.50:
            prediction = model.predict(features)[0]
            return prediction

        speech_result = speech_fallback(file_path)
        if speech_result:
            return speech_result

        return "Not an animal voice"

    except Exception as e:
        print("Error:", e)
        return "Error processing audio"


if __name__ == "__main__":
    file_path = sys.argv[1]
    result = predict_audio(file_path)
    print(result)