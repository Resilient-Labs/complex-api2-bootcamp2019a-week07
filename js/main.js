document.querySelector("button").addEventListener("click", artist);

function artist() {
  let artistName = document.getElementById("input").value;
  let apiURL =
    "https://theaudiodb.com/api/v1/json/195003/searchalbum.php?s=" +
    encodeURI(artistName);
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("img").src = response.album[1].strAlbumThumb;
      album(response.album[1].strAlbum);
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}

function album(name) {
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
      alert("can't find this description.");
    });
}
