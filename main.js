document.querySelector('form').addEventListener('submit',cerca)
let apiKey ='AoXagPnxpYhzo2HWzj3KaWNTZkwVZ8io'
let artista=""
function cerca(e){
  e.preventDefault()
  let artistName = document.querySelector("input").value
  fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${artistName}&api_key=0a9eb4523d8b519bfda857a49973daeb&format=json`)
  .then(res => res.json())
  .then(response => {
    console.log(response)
    document.querySelector('h2').innerHTML = response.results.albummatches.album[0].artist
    document.querySelector('#albumCoverOne').src = response.results.albummatches.album[0].image[3]["#text"]
    document.querySelector('#albumCoverTwo').src = response.results.albummatches.album[1].image[3]["#text"]
    document.querySelector('#albumCoverThree').src = response.results.albummatches.album[2].image[3]["#text"]
    document.querySelector('#albumCoverFour').src = response.results.albummatches.album[3].image[3]["#text"]
    document.querySelector('#albumCoverFive').src = response.results.albummatches.album[4].image[3]["#text"]
  })
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=0a9eb4523d8b519bfda857a49973daeb&format=json`)
  .then(res => res.json())
  .then(response => {
    document.querySelector('#artistBio').textContent = response.artist.bio.content
  })
  artistName = document.querySelector("input").value
  fetch(`https://api.giphy.com/v1/gifs/search?q=${artistName}&api_key=${apiKey}&limit=5`)
  .then(res => res.json())
  .then(json => {
    console.log("image", json.data[0].images.original.url);
    document.querySelector('#artistImage').src= json.data[0].images.original.url
  })
}
