//Collaborated with Asiah
let button = document.querySelector('button')
button.addEventListener('click', ()=> {
  let search = 'kanye'

  fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=3lIcnOCd2Cxc3X5k1xG6tcZMlh435OwN`)
    .then(response => response.json()) // parse response as JSON (can be res.text() for plain response)
    .then(retrieveGif => {
      // for(let i = 0; i < response.data.images.original.url.length; i++){
      //     document.querySelector("img").src = response.data[i].images.original.url
      // }
      let randomImage = Math.floor((Math.random()* retrieveGif.data.length))
      document.querySelector("img").src = retrieveGif.data[randomImage].images.original.url
        //console.log(retrieveGif)
    })
     fetch("https://api.kanye.rest")
         .then(response => response.json()) // parse response as JSON (can be res.text() for plain response)
         .then(getQuote => {
             //console.log(getQuote.quote)
             document.getElementById('kanyeQuote').innerHTML = getQuote.quote
         })
        .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
        })
});
