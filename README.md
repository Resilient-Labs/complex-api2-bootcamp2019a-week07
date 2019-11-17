# 📊 Project: Complex API 2

### Goal: Use data returned from one api to make a request to another api and display the data returned

Upon submitting an artist's name and song title, this web app returns a gif of that artist and the lyrics to that song.

**Link to project:** https://vigilant-cori-884df1.netlify.com

![alt tag](https://github.com/anthonybetances/complex-api2-bootcamp/blob/answer/Screen%20Shot%202019-11-17%20at%203.33.01%20AM.png)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, APIs.
This web app runs an artist's name and song title through a song lyrics API and displays that song's lyrics in the DOM.  It then begins another fetch, running the artist's name from the response object through a another API in order to retrieve a gif from that response object.  I know that I could have retrieved that gif by using the artist's name from the input to begin with, but the objective was to use the data from the first request to retrieve data in a second response.

## How To Use:
  1. Click on the link above.
  2. Enter an artist's name and song title, and click "submit."
  3. Enjoy a gif of the artist and their song lyrics.
