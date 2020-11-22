import re
import sklearn as sk
from ML.classes import classes  # Categories taken from classes.py


def classify(sentence):
    """Given a sentence check the signals from the categories to classify
    the corresponding class.
    Returns:
        Class name with most weight as String
    """
    print(sentence)
    # Remove the hashtags
    sentence = re.sub('[^A-Za-z0-9 ]+', '', sentence).lower()
    # Get the weights from the sentence
    res = {}
    for cat in classes:
        weight = 0
        for i in sentence.split():
            if i in classes[cat]:
                weight += 1
        res[cat] = weight
    # Return most weight
    return max(res, key=res.get)


def classify_list(sentence_list):
    """Iteration over multiple sentences.
    Returns:
        Classes as a list of Strings
    """
    return [classify(x.text) for x in sentence_list]
