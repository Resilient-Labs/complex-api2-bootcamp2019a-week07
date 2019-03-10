document.querySelector("button").addEventListener("click", getMovie);

function getMovie() {
  let movie = document.getElementById("input").value;
  let apiURL = "http://www.omdbapi.com/?apikey=970fe401&t=" + encodeURI(movie);

  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("img").src = response.Poster;
      let actors = response.Actors.split(" ");
      console.log(actors);
      let actor = actors[0];
      actorGender(actor);
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, no match");
    });
}
function actorGender(name) {
  let apiURL = "https://api.genderize.io/?name=" + name;

  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      document.querySelector("p").innerHTML =
        "the AI predicted gender of this actor is " + response.gender;
    });
}
