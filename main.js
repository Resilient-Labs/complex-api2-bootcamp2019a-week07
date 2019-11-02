const btn = document.querySelector("button")
const result = document.querySelector("#result")
const apikey = 'd27fa72dba20447da8a96bad464e8a5c'

btn.addEventListener('click',() =>{
const input= document.querySelector("#name").value

fetch(`https://api.nationalize.io?name=${input}`)
    .then(res => res.json())
    // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      const resultss = document.createTextNode(response.country[0].country_id)
      result.appendChild(resultss)
      // resultss(0);
      let countryId = response.country[0].country_id

        // console.log(response.country[0].country_id)
fetch(`https://newsapi.org/v2/top-headlines?country=${countryId}&apiKey=${apikey}`)
  .then(res => res.json())
  // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    // console.log(response.articles[0].description)
    const story = document.createTextNode(response.articles[0].description)
    headline.appendChild(story)
    // let country = response.country[0].country_id

    })
  })

    .catch(err => {
        console.log(`error ${err}`)
        return("sorry, there are no results for your search")
    });

  })
