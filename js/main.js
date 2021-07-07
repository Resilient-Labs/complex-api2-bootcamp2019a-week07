document.querySelector("form").addEventListener("submit", cocktail)

function cocktail(e){
  e.preventDefault()
//fetch api to get random alcohol
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(response => {
      //take only the alcohol out of api
      let drink = response.drinks[0].strIngredient1
      //pass alcohol into wikipedia api for a description
      wiki(drink)
    }) //closes response promise
  .catch(err => console.log(`error ${err}`))
} //closes cocktail function

//function for wiki api
function wiki(drink){
  //pass drink through wiki api
  fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${drink}&format=json`)
  .then(res => res.json())
  .then(response =>{
    //if the description doesn't exist have user pick a new random drink
    if(response[2][0] === [] || response[2][0] === ''){
      document.querySelector('p').textContent = 'try again'
    }else{
      //when a description does exist, display it
      let description = response[2][0]
      document.querySelector('p').textContent = description;
    }
  }) //closes response promise
  .catch(err => {
    console.log(`error ${err}`)
  })
}
