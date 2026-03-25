import librosa
import numpy as np

def predict_audio(file):

    y, sr = librosa.load(file)

    spec = librosa.feature.melspectrogram(y=y, sr=sr)

    feature = np.mean(spec)

    if feature > 0:
        return "animal sound"
    else:
        return "unknown"