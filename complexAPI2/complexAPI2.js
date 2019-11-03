
const button = document.querySelector('button')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let ul = document.querySelector('ul')
const apiKeyOne = 'UE8480kHW5B73coTMPmzNnNa1zmC7OlMP26edzCxkIhk9CJYqKG376E30jHd8e8M'
const apiKeyTwo = '5NKJ6RSfuzu490gBhYqY3E7wYiqX2ubB'

button.addEventListener('click', ()=>{
  let artist = document.querySelector('#artist').value
  let track = document.querySelector('#track').value

  fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${track}?apikey=${apiKeyOne}`)
    .then(res => res.json())
    .then(response => {
      //console.log(response)
      h2.innerHTML = track
      h3.innerHTML = artist
      // console.log(response.result.track.text)
      //console.log(response.result.artist)
      let lyrics = response.result.track.text
      let p = document.createElement('p')
      let li = document.createElement('li')
      p.innerHTML = `${lyrics}`
      li.appendChild(p)
      ul.appendChild(li)
      let name = response.result.artist.name

      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKeyTwo}&q=${name}&limit=1&offset=0&rating=R&lang=en`)

        .then(res => res.json())
        .then(response => {
          //console.log(response)

          let giphy = response.data[0].images.downsized_large.url
          document.querySelector('img').src = giphy

        })

    })
    .catch(err => {
        //console.log(`error ${err}`)
        alert("Sorry, there are no results for your search.")
})

})
