document.querySelector("button").addEventListener("click", getMovie);

function getMovie() {
  let movie = document.getElementById("movie").value;
  let apiURL = "http://www.omdbapi.com/?apikey=970fe401&t=" + encodeURI(movie);

  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("img").src = response.Poster;
      document.querySelector("h2").innerHTML = response.Title;
      document.querySelector("p").innerHTML = response.Plot;
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, no match");
    });
}
