import re
import pickle as pk


def get_model():
    """Returns model, transformer, ps, results
    This model is trained on Sarcasm_Headlines_Dataset from Kaggle"""
    return pk.load(open("ML/model_transform_results.pk", "rb"))


def preprocess(tweets, ps):
    """Processes sentence to give stems.
    Arguments:
      sentence: String to preprocess
      ps: PorterStemmer, should be passed taken from get_model
    Returns:
      String with only stems  
    """
    lists = [re.sub('[^a-zA-Z]', ' ', tweet.text).split() for tweet in tweets]
    return [" ".join(ps.stem(word) for word in words) for words in lists]


#     return [" ".join(ps.stem(word) for word in re.sub('[^a-zA-Z0-9]', ' ', sentence.text).split()) for sentence in sentences]
#     return [" ".join(ps.stem(words)) for words in [re.sub('[^a-zA-Z0-9]', ' ', srch.text).split() for srch in search2]]
