import pickle
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import numpy as np
import ML.queries as query
import ML.search_api as search_api

# Create your views here.


@api_view(['GET', 'POST'])
@csrf_exempt
def fetchTweets(request):
    if request.method == 'GET':
        return HttpResponse('<h1>it was a get</h1>')
    elif request.method == 'POST':
        print(request.data)
        data = []
        labels = []
        tweetContent = {}
        tweet_data = None
        if request.data['keyword'] == 'general':
            tweet_data = search_api.hit_search_api(query.general, 10)
        elif request.data['keyword'] == 'immediate':
            tweet_data = search_api.hit_search_api(query.immediate, 10)
        elif request.data['keyword'] == 'twittersos':
            tweet_data, labels = search_api.run_model_on_search(
                query.twittersos, 10)
        for index, tweet in enumerate(tweet_data):
            tweetContent["tweet.id"] = tweet.id
            tweetContent["tweet.text"] = tweet.text
            tweetContent["tweet.created_at"] = tweet.created_at
            tweetContent["tweet.user.name"] = tweet.user.name
            tweetContent["tweet.user.profile_image_url_https"] = tweet.user.profile_image_url_https
            tweetContent["tweet.user.screen_name"] = tweet.user.screen_name
            if len(labels) > 1:
                tweetContent["status"].append(label[index])
            data.append(tweetContent)
        return JsonResponse(data, safe=False)
