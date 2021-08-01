# Emergency-Tweets
![Emergency-Tweets](https://socialify.git.ci/Mugunthanraju/Emergency-Tweets/image?font=KoHo&forks=1&language=1&logo=https%3A%2F%2Fexternal-content.duckduckgo.com%2Fiu%2F%3Fu%3Dhttps%253A%252F%252Ftse2.mm.bing.net%252Fth%253Fid%253DOIP.rU1ROiYQUyfl4wR7xvAy3QHaEc%2526pid%253DApi%26f%3D1&owner=1&pattern=Brick%20Wall&stargazers=1&theme=Dark)

### Description :-

**Many innocent people could not get emergency help when they are facing any sort trouble from the following :**

    1) Health
    2) Threat
    3) Nature Calamity

**This is because their message may not reach or get notified to respective departments. So we came up with a solution which will over come this problem using a greatest networking service provider in the world `Twitter`.**

We achived it by adding an extra button on `Sidebar of Twitter` Clone, by clicking button it directs to a webpage where we can see all **Emergency Tweets** in three categories.

<img src="https://github.com/Mugunthanraju/Emergency-Tweets/blob/main/ScreenShot/image.png" alt="Twitter Application" >

### Tech Stack :

1) React Js 
2) Django
3) Twitter API
4) Sckit-Learn 
5) NLTK
6) Watson NLU API

**The design is simple: We hit the Twitter Search API to get the tweets using queries selected after a thoughtful process. The hashtags are shown on the right, and can be displayed directly.**

*For flagging and color coding tweets we have a combined model.*

**1) Sarcasm Detector finds out if a tweet is sarcastic, because we all know people like beating around the bush on Twitter (Thanks @Kaitlyn for the idea).**
<br>
**2) Fear Detector finds out if the person is scared by using IBM Watson NLU API.**
<br>
**3) If the tweet is not sarcastic and has fear elements, then the NLP model classifies those tweets as non-serious, police, or hospital related.**


<img src="https://github.com/Mugunthanraju/Emergency-Tweets/blob/main/ScreenShot/Steps.jpg" alt="Twitter Application" >


### Authored by : 

    1) Ekrem Guzelyel (ML, Backend)
    2) Mugunthan Raju (Front-end, Database)
    3) Mert Can Bilgiç (Front-End)
    4) Soumya Vemuri (Full-Stack)
    5) Pranav Anand (ML, Backend)
