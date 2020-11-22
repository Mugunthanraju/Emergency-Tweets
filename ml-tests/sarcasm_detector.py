import re
import pickle as pk

def get_model():
    """Returns model, transformer, ps, results
    This model is trained on Sarcasm_Headlines_Dataset from Kaggle"""
    return pk.load(open("model_transform_results.pk", "rb"))

def preprocess(sentences, ps):
    """Processes sentence to give stems.
    Arguments:
      sentence: String to preprocess
      ps: PorterStemmer, should be passed taken from get_model
    Returns:
      String with only stems  
    """
    return [" ".join(ps.stem(word) for word in re.sub('[^a-zA-Z]', ' ', sentence).split()) for sentence in sentences]