const btn = document.querySelector("button")
const result = document.querySelector('#result')
const resultTwo = document.querySelector("#countryName")


btn.addEventListener('click', ()=>{
  click: 0
  const input = document.querySelector('#nameInput').value
  fetch(`https://api.nationalize.io?name=${input}`)
   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
   .then(response => {
let nameInfo = document.createTextNode(response.name + " ")

result.appendChild(nameInfo)

let countryId = response.country[0].country_id

fetch(`https://restcountries.eu/rest/v2/alpha?codes=${countryId}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    let countryInfo = document.createTextNode("-> " + response[0].name +"!!!")
    result.appendChild(countryInfo)
})
   .catch(err => {
       console.log(`error ${err}`)
       alert("sorry, there are no results for your search")
   });


})
})
