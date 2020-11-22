# Watson NLU gives fear scores, and requires 1 API call each time
# Sarcasm Detector is a standalone model, and can be pickle loaded.
# NLP model for classification. Done after the other two.

# Import the three packages and pickle
import nlp_model
import pickle as pk
import sarcasm_detector
import watson_nlu



# Initiate this in the first place. Add to main
nlu_api = watson_nlu.get_ibm_nlu()
clf, tv, ps, scores = sarcasm_detector.get_model()


def is_eligible(tweets):
    """Given list of tweets that fetched from search api to check if 
    they are eligible classification.
    If you want to pass only one tweet, add brackets tweet -> [tweet]
    
    Params: 
        tweets: list of dictionaries taken from search api 
    Returns: 
        1-0 matrix of len(tweets)
    """
    fear_matrix = [watson_nlu.is_fearful(tweet.text, nlu_api) for tweet in tweets]
    processed_tweets = sarcasm_detector.preprocess(tweets, ps)
    sarcasm_matrix = clf.predict(tv.transform(processed_tweets))
    return [1 if (fear_matrix[i] and not sarcasm_matrix[i]) else 0 for i in range(len(fear_matrix))]

def emergent_tweets(tweets):
    """ Applies classification criteria to the tweets and returns only eligibles.
    Returns: 
        Emergent tweets with text, id, and place vs. corresponding Class.
    """
    eligible_tweets = [(tweet.text, tweet.id, tweet.place) for i, tweet in enumerate(tweets) if is_eligible(tweets)[i]]
    return eligible_tweets, nlp_model.classify_list(list(zip(*eligible_tweets))[0])