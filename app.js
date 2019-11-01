// var game = fetchOne();
// var gif = fetchTwo(game)
//
// function submitHandler (e) {
//  e.preventDefault();
//  fetchOne(this.elements.query.value)
//   .then(fetchTwo)
//   .then(imgsrc => imgsrc.gif)
//   .catch(alert("hey"))
// }
//
// function fetchOne (character) {
//   return fetch(`https://www.amiiboapi.com/api/amiibo/?character=${character}`)
//   .then(res => res.json())
//   .then(response => console.log(response.amiibo[0]));
//   // .then(response => response.amiibo.length ? response.amiibo[0].gameSeries : "")
//
// }
//
// function fetchTwo (game) {
//   return fetch(`https://api.giphy.com/v1/gifs/search?api_key=9KSVqsXtiBiPjGidpFgxx1Pz76OgLDiv&q=${game}&limit=10`)
//   .then(res => res.json())
//   .then(response => response.data.length ? response.data[0].url : "")
// }

document.getElementById('twoAPI').addEventListener("submit", fetchUpdated)

function fetchUpdated(e) {
  e.preventDefault();
  let character = this.elements.query.value;
  fetch(`https://www.amiiboapi.com/api/amiibo/?character=${character}`)
  .then(res => res.json())
  .then(res => fetchTwoUpdated(res.amiibo[0].gameSeries))
  .catch(err => console.log(err))
}
function fetchTwoUpdated(game) {
  fetch(`http://localhost:8010/v1/search?q=${game}&key=ERHRYHRBWT9J&limit=8`)
  .then(res => res.json())
  .then(res => {document.querySelector('img').src = res.results[0].url})
  .catch(err => console.log(err))
}
