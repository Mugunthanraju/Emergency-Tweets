import ML.config as config
import json
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features, EmotionOptions
import sys
sys.path.append("..")


def get_ibm_nlu():
    """ Constructs an instance of NaturalLanguageUnderstandingV1 using the tokens in the file
    at credentials_path
    Returns:
        An instance of NaturalLanguageUnderstandingV1
    """
    authenticator = IAMAuthenticator(config.watson_api_key)
    nlu = NaturalLanguageUnderstandingV1(
        version='2019-07-12',
        authenticator=authenticator
    )
    nlu.set_service_url(config.watson_service_url)
    return nlu


def is_fearful(input_text, nlu):
    """ Classifies the text based on the fear level. Above a threshold is fearful. 
    Returns:
        True or False if fear detected
    """
    tweet_score = nlu.analyze(text=input_text,
                              features=Features(emotion=EmotionOptions()), language='en').get_result()
    return True if tweet_score["emotion"]["document"]["emotion"]["fear"] > 0.4 else False
