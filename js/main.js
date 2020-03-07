let key1 = `iBsnYnU` // api key for Strain API
let key2  =`N2X7YV6CcMVkM7ykUk8QdDNpUvc1sgZ7` // api key for Giphy

let sec = document.querySelector(`section`)

document.querySelector(`button`).addEventListener(`click`, onClick)


function onClick(){

  if(sec.hasChildNodes() === true){ //removes all children from sec
    
    while (sec.firstChild) {
      sec.removeChild(sec.lastChild);
    }


}
  getStrain()
}




function getStrain(){

  let searchThis = document.querySelector(`#strain-search`).value

  fetch(`http://strainapi.evanbusse.com/${key1}/strains/search/name/${searchThis}`)
    .then(res => res.json()) 
    .then(response => {
      let name = response[0].name 
      getGif(name)


    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there seem to be something wrong with our servers")
    });


  }






  function getGif(searchName){

    fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key2}&tag=${searchName}`)
      .then(res => res.json()) 
      .then(response => {
        let gifUrl = response.data.image_url
        let img = document.createElement(`img`)
        let span = document.createElement(`h3`)
        img.src = gifUrl
        img.style = `height: 200px; width:20%`
        span.textContent = `Strain Name:${searchName}`

        sec.appendChild(span)
        sec.appendChild(img)


      })

      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there seem to be something wrong with our servers")
      });


  }

