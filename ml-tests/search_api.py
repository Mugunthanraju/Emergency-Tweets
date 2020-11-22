import tweepy
import config # For API Keys and stuff
import pprint

auth = tweepy.OAuthHandler(config.consumer_key, config.consumer_secret)
auth.set_access_token(config.access_token, config.access_token_secret)
api = tweepy.API(auth)


def hit_search_api(query, count):
    """Given the queries hit search api
    Returns:
        A search object, json
    """

    return api.search(query, count=count)