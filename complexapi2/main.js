let key = '358b05e4cefe35605b076cef671c39c9a004087f56dd27fb588d414c7a99d0cd'

let button = document.querySelector("#button")
let result = document.querySelector('#result')
// by_city=boston&by_state=massachusetts"
function apiOne() {

  let input = document.querySelector('#input').value

  fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`)
    .then(res => res.json())
    .then(response => {
      let entry = response[0].name
      let place=document.createTextNode(entry)
      result.appendChild(place)
      apiTwo(entry)


    })
  }


function apiTwo(breweryName) {

  fetch(`https://api.unsplash.com/photos/random/?client_id=${key}&query=${breweryName}`)
    .then(res => res.json())
    .then(response => {
      console.log(response)
document.querySelector('img').src=response.urls.small
      // document.query(response.urls.small)
      // result.appendChild(mess)
input.value=""
    }).catch(err => {
      alert("sorry")
    })
}

button.addEventListener('click', () => {
  apiOne()

})
