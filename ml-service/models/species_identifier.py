from .image_model import predict_image

def identify_species(image_path):

    result = predict_image(image_path)

    # result is already a dictionary with species information
    return result