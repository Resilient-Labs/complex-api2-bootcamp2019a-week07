// Complex API Project

//Movie
//OMDb API url: http://www.omdbapi.com/?i=tt3896198&apikey=9ea7c47f

//GIF
//GIPHY API url: https://api.giphy.com/v1/gifs/search?q=${orange}&api_key=AoXagPnxpYhzo2HWzj3KaWNTZkwVZ8io&limit=5

//Goal: User writes a movie, we take the value of the movie and display the most popular actors from that movie. Then you can click on the actor name and get a related gif from that actor.

let orange = ""

document.querySelector('form').addEventListener('submit',function (e){
  e.preventDefault()
  let movieName = document.querySelector('input').value
  console.log(movieName)
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=9ea7c47f`
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(response => {
    console.log("response from fetch");
    console.log(response);
    document.querySelector('#result1').textContent = response.Actors;
    document.querySelector('#result2').textContent = response.Awards;
    document.querySelector('#result3').textContent = response.BoxOffice;
    document.querySelector('#result4').textContent = response.Director;
    document.querySelector('#result5').textContent = response.Genre;
    document.querySelector('#result6').textContent = response.Released;
    orange = response.Title
    console.log(orange)
  })

   fetch(`https://api.giphy.com/v1/gifs/search?q=${orange}&api_key=AoXagPnxpYhzo2HWzj3KaWNTZkwVZ8io&limit=5`)
   .then(response => {
       return response.json();
   })
   .then(json => {
     console.log(json)
       console.log(json.data[0].images.original.url);
       document.querySelector('#movieName').src= json.data[0].images.original.url
   })

  // .catch(err =>{
  //   console.log(`error ${err}`)
  //   alert(response.Error)
  // })
})
//Notes
//my .catch function is not running and not sure why? Can someone explain why?
//orange variable was globally declared and passed through one API call, then reassigned a response data and used to passed into another variable


// document.querySelector('#result2').src = response;
// findArticle(response)


  // response.forEach(function(element){
  // let ol = document.querySelector("ol")
  // let li = document.createElement("li")
  // li.appendChild(document.createTextNode(element)) //element.date
  // ol.appendChild(li)
