document.querySelector('button').addEventListener('click', getInfo)

function getInfo() {

  let artist = encodeURIComponent(document.querySelector('input').value)
  let url = `http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.artists[0].aliases.length; i++) {
        let listItem = document.createElement('li')
        let textItem = document.createTextNode(data.artists[0].aliases[i].name)
        listItem.appendChild(textItem)
        document.getElementById('names').appendChild(listItem)

        let name = data.artists[0].name

        let urlTwo = `https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`
        fetch(urlTwo)
          .then(res => res.json())
          .then(data => {
            console.log(data.artists[0].strArtistFanart);
            document.querySelector('img').src = data.artists[0].strArtistFanart

          })
      }
    })
}
