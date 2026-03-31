import librosa
import numpy as np

def extract_features(file_path):
    y, sr = librosa.load(file_path, sr=22050)
    y = librosa.util.normalize(y)

    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
    delta = librosa.feature.delta(mfcc)

    combined = np.vstack((mfcc, delta))
    return np.mean(combined.T, axis=0)