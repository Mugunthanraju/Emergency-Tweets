# Emergency-Tweets

### Description :-

**Many innocent people could not get emergency help when they are facing any sort trouble from the following :**

    1) Health
    2) Threat
    3) Nature Calamity

**This is because their message may not reach or get notified to respective departments. So we came up with a solution which will over come this problem using a greatest networking service provider in the world `Twitter`.**

We achived it by adding an extra button on `Sidebar of Twitter` Clone, by clicking button it directs to a webpage where we can all **Emergency Tweets** in three categories.

<img src="https://github.com/Mugunthanraju/Emergency-Tweets/blob/main/ScreenShot/image.png" alt="Twitter Application" >

### How it built :

**The front-end was done using React.js The full-stack is done using Django, Twitter API The Backend is Python, sklearn, nltk, Watson NLU API**

**The design is simple: We hit the Twitter Search API to get the tweets using queries selected after a thoughtful process. The hashtags are shown on the right, and can be displayed directly.**

*For flagging and color coding tweets we have a combined model.**

1) Sarcasm Detector finds out if a tweet is sarcastic, because we all know people like beating around the bush on Twitter (Thanks @Kaitlyn for the idea).
2) Fear Detector finds out if the person is scared by using IBM Watson NLU API.
3) If the tweet is not sarcastic and has fear elements, then the NLP model classifies those tweets as non-serious, police, or hospital related.


<img src="https://github.com/Mugunthanraju/Emergency-Tweets/blob/main/ScreenShot/Steps.jpg" alt="Twitter Application" >
