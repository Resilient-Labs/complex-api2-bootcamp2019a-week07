document.querySelector("button").addEventListener("click", movie);

function movie() {
  let movie = document.getElementById("movie").value;
  let apiURL = "http://www.omdbapi.com/?apikey=464729fb&t=" + encodeURI(movie);

  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("img").src = response.Poster;
      let actors = response.Actors.split(",");
      let mainActor = actors[0];
      actor(mainActor);
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}

function actor(name) {
  var apiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
    name +
    "&format=json";
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response);
      document.querySelector("p").innerHTML = response[2][0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("We're sorry! We can't find the description for this one.");
    });
}
