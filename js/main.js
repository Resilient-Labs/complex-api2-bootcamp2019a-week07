// .. click button to generate a random date (API 1), (generate one this day facts  (API 2)
// random date generator url  "https://api.lrs.org/random-date-generator"
//
//
//
// on this day url `https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/${month}/${day}`
http://www.randomnumberapi.com/api/v1.0/random?min=12&max=12&count=2



document.querySelector('button').addEventListener('click', generateFlag)

function generateFlag() {
  let input = document.querySelector('#input').value
  let url = `https://restcountries.eu/rest/v2/name/${input}`
  fetch(url)
    .then(res => res.json()) // parse response as JSONabcs
    .then(data => {
      document.querySelector('#name').innerText = data[0].name
      document.querySelector('#population').innerText = data[0].population
      document.querySelector('#region').innerText = data[0].region
      document.querySelector('#currencies').innerText = data[0].currencies[0].symbol
      let country = data[0].name
      let incomeUrl = `http://api.worldbank.org/v2/country/br?format=json`
      console.log(incomeUrl)
      fetch(incomeUrl)
        .then(res => res.json()) // parse response as JSON
        .then(country => {
          document.querySelector('#flag').innerHTML = `<img src=\"${data[0].flag}\">`
        })
    })
.catch(err => {
  console.log(`error ${err}`)
});
}
