

document.querySelector("button").addEventListener("click", function(){
  var second;
  fetch("https://www.potterapi.com/v1/sortingHat")//First API
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector(".value").innerHTML = response

         second = response
         runType(second)
         console.log(response)
         console.log(second);
       })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
});

function runType(second){
fetch(`https://api.giphy.com/v1/gifs/search?api_key=PfOFiWoZAI3XfShqhR0PTqLfoXZIecOa&q=${second}&limit=1&offset=0&rating=pg&lang=en`)//Second API
   .then(res => res.json())
   .then(response => {
     console.log(response.data[0].images.original.url)
     document.querySelector("img").src = response.data[0].images.original.url
       })
   .catch(err => {
       console.log(`error ${err}`)
       alert("sorry, there are no results for your search")
   });}
