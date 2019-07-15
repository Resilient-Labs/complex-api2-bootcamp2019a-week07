document.querySelector('form').addEventListener('submit',cerca)
// each element will have their own event

let apiKey ='AoXagPnxpYhzo2HWzj3KaWNTZkwVZ8io'
let artista=""
// let artistName = document.querySelector("input").value

function cerca(e){
  e.preventDefault()
  // by default form reloads the page
  let artistName = document.querySelector("input").value
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=0a9eb4523d8b519bfda857a49973daeb&format=json`)
  .then(res => res.json())
  .then(response => {
    console.log(response)
    document.querySelector('#mostPlayed').textContent = response.toptracks.track[0].name
     artista = encodeURIComponent(response.toptracks["@attr"].artist)
     console.log(response.toptracks["@attr"].artist, "hey")
    // return response;
  })
  // let mostPlayedSong = getMostPlayedSong(artistName)
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=0a9eb4523d8b519bfda857a49973daeb&format=json`)
    .then(res => res.json())
    .then(response => {
      document.querySelector('#artistBio').textContent = response.artist.bio.content
      // console.log(response.arist.image[0])

  })
  artistName = document.querySelector("input").value
  // artista bug double enter
   fetch(`https://api.giphy.com/v1/gifs/search?q=${artistName}&api_key=${apiKey}&limit=5`)
   .then(res => res.json())
   // (response => {
       // return response.json();
   // })
   .then(json => {
       console.log("image", json.data[0].images.original.url);
       document.querySelector('#artistImage').src= json.data[0].images.original.url
   })
}



         // function setup(e){
         //
         //
         //     // .catch(err => console.log(err));
         // }

// function imageCerca(e){
//   e.preventDefault()
//   cerca(artistName)
//   function getImage(){
//     fetch(`https://api.unsplash.com/search/photos?client_id=909b065e37e566a66b7125107fbbdab926db42ccd784eda6dae0078946bdfc91&query=Drake`)
//     .then(res => res.json())
//     .then(response=>{
//       console.log(response)
//       // document.querySelector('#artistImage').src = response.
//   })
// }

//Sample Code

// const client_id ="1424074b20f17701ec8c0601fd15ca686c70e2cb0e645f8137533d8063e664bc"
// const query = 'woods';
// function makeCall(){
//
//   fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}`,{method:'get'}).
// .then(res=>res.json())
// .then(res=>console.log("boommer",res))
// .catch(res=>console.log("error",res))
//
// }
// makeCall();
