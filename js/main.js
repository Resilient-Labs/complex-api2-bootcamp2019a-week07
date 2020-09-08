
function pickDrinkAndFindDefinition() {
  var myHeaders = new Headers();
  var requestOptions = {
    method: "GET",
    mode: "cors",
    headers: myHeaders,
    redirect: "follow",
    credentials: "same-origin",
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  let userAnswer = document.querySelector("input").value;
  document.querySelector("input").value = "";
  userAnswer = userAnswer.replace(" ", "%20");
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userAnswer}`
  )
    .then((response) => response.json())
    .then((data) => {
      let drinkIngredient = data.drinks[0].strIngredient1
      document.getElementsByTagName("h2")[0].innerHTML =
        data.drinks[0].strDrink;
      document.getElementsByTagName("img")[0].src =
        data.drinks[0].strDrinkThumb;
      document.getElementsByTagName("span")[0].innerHTML = drinkIngredient;
  fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${drinkIngredient}?key=aea58918-9f07-4f98-ac53-144b71cdf799`, requestOptions)
    .then(response => response.json())
    .then(result => {
      document.getElementsByTagName("p")[0].innerHTML = result[0].shortdef;
      })
    })

    .catch((err) => {
      console.log(`error ${err}`);
      alert("Sorry, there are no results for your search");
    });
}

document.querySelector("button").addEventListener('click', (e) => {
  pickDrinkAndFindDefinition()
})
