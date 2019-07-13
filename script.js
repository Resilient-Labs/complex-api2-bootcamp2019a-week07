document.querySelector("button").addEventListener("click",function(){
  const artist = document.querySelector("input").value
  console.log(artist)
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=df944f5a9cf907d8eb48c3e8a2488ad5&format=json`)
  .then(response => response.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response)
    console.log(response.results.artistmatches.artist[0].name)
    console.log(response.results.artistmatches.artist[0].listeners)
    console.log(response.results.artistmatches.artist[0].url)
    let artist = response.results.artistmatches.artist[0].name
    let listeners = response.results.artistmatches.artist[0].listeners
    let url = response.results.artistmatches.artist[0].url
    document.querySelector("#artist").innerHTML = `Artist: ${artist}`
    document.querySelector("#listeners").innerHTML = `Listeners: ${listeners}`
    document.querySelector("#url").innerHTML = `URL: ${url}`

    //new fetch here
    fetch(`http://api.giphy.com/v1/gifs/search?q=${artist}&api_key=K0KRlFmkTlvcUPjs0KfEhR2gv7OX70nd&limit=5`)
    .then(response => response.json())
    .then(response => {
      console.log(response.data[0].title)
      console.log(response.data[0].images.downsized_small.mp4)
      document.querySelector("iframe").alt = response.data[0].title
      document.querySelector("iframe").src = response.data[0].images.downsized_small.mp4
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    })


  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
})

// LAST FM and GIPHY

//LAST FM API
// https://www.last.fm/api/
// https://www.last.fm/api/show/artist.search
// Example URL
// http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
// API key	df944f5a9cf907d8eb48c3e8a2488ad5

// GIPHY API
// https://developers.giphy.com/docs/api#quick-start-guide
// Api Key:
// K0KRlFmkTlvcUPjs0KfEhR2gv7OX70nd
// https://developers.giphy.com/docs/resource/#code-examples
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=K0KRlFmkTlvcUPjs0KfEhR2gv7OX70nd&limit=5
