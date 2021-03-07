// Use data returned from one api to make a request to another api and display the data returned
// Ibrahim helped meeeee


document.querySelector('button').addEventListener('click', getMusic)
var artist
var title
function getMusic(){
  let url =`https://api.lyrics.ovh/suggest/kanye`
   // let url2 = `https://orion.apiseeds.com/api/music/lyric/${artist}/${songTitle}?apikey=TibJStcK2J0m8rOQyhrNNWLXYDxSd3rvWRIyfS3Pwv3PvVu5aOD8dS5PaR5spEmI`
   let input = document.querySelector('input').value.toUpperCase


fetch(url)
  .then(res => res.json())
  .then(data => {
   console.log(data);
for (let i = 0; i < data.data.length; i++) {
  artist = data.data[0].artist.name
  document.querySelector('img').src = data.data[i].album.cover
   title = data.data[0].title

  // to connect api's
    getLyrics(artist,title)
  // console.log(data[i]);
}

  })



}

function getLyrics(artist,title){

  fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${title}?apikey=TibJStcK2J0m8rOQyhrNNWLXYDxSd3rvWRIyfS3Pwv3PvVu5aOD8dS5PaR5spEmI`)
    .then(res => res.json())
    .then(data => {
       // console.log(data);
       for (let i = 0; i < data.result.length; i++){

        // result.innerHTML = data.result.track.text.replace(/(\r\n|\r|\n)/g, "<br>")
    result.innerHTML = data.data.result[i].track.text

    // data.result.track[i].text
       }
 document.getElementById('result').innerText = data.result.track.text
      // album.innerHTML = data.
    })
}
