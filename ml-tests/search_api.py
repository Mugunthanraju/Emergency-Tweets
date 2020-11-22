import tweepy
import config # For API Keys and stuff
import pprint
import emergency_detector

auth = tweepy.OAuthHandler(config.consumer_key, config.consumer_secret)
auth.set_access_token(config.access_token, config.access_token_secret)
api = tweepy.API(auth)


def hit_search_api(query, count):
    """Given the queries hit search api
    Returns:
        A search object, json that includes text, id, place etc.
    """
    return api.search(query, count=count)

def run_model_on_search(query, count):
    """Run query and model in real time.
    Use this function only for TwitterSOS at the moment.
    Returns:
        List of [(tweet.text, tweet.id, tweet.place)], class
    """
    tweets = api.search(query, count=count)
    return emergency_detector.emergent_tweets(tweets)