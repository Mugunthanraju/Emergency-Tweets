# Watson NLU gives fear scores, and requires 1 API call each time
# Sarcasm Detector is a standalone model, and can be pickle loaded.
# NLP model for classification. Done after the other two.

# Import the three packages and pickle
import classes
import nlp_model
import pickle as pk
import watson_nlu
import sarcasm_detector


# Initiate this in the first place. Add to main
nlu_api = watson_nlu.get_ibm_nlu()
clf, tv, ps, scores = sarcasm_detector.get_model()


def is_eligible(tweets):
    """Given list of tweets as text return if emergent/eligible for a test 1, else 0.
    If you want to pass only one tweet, add brackets tweet -> [tweet]
    Returns: 
        1-0 matrix of len(tweets)
    """
    fear_matrix = [watson_nlu.is_fearful(tweet, nlu_api) for tweet in tweets]
    processed_tweets = sarcasm_detector.preprocess(tweets, ps)
    sarcasm_matrix = clf.predict(tv.transform(processed_tweets))
    return [1 if (fear_matrix[i] and not sarcasm_matrix[i]) else 0 for i in range(len(fear_matrix))]

def emergent_tweets(tweets):
    "Returns: Emergent tweets with their corresponding Class."
    eligible_tweets = [tweet for i, tweet in enumerate(tweets) if is_eligible(tweets)[i]]
    return eligible_tweets, nlp_model.classify_list(eligible_tweets)