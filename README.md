# complex-api-movie-recommeder

This is a movie recommender app that take an actor's name and generates a movie recommendation and a movie review. For example, if the user wants to watch a movie with Will Smith, they can input Will Smith and click enter. Then, a movie recommendation with Will Smith in it and a movie review will appear.

Link to Project: https://movie-recommeder-api.netlify.app/

![Project Image](/pic/movie.png)


### How It's Made:

Tech used: HTML, CSS, JavaScript

This dictionary app uses 2 APIs: 1) a Movie API (themoviedb.org ) and 2) a Movie Review API (new york times movie review). First, the user inputs an actor's name (i.e. Will Smith) and clicks enter. Next, a movie with Will Smith in it and its plot summary is returned as a recommendation. Then, the movie title is sent to the movie review API where the movie review is returned to the DOM. 

actor's name -> movie recommendation -> movie review


### Lesson Learned

I learned how to use 2 APIs in an app. I did this by writing a fetch statement and nesting another fetch statement inside of it. 
 

###