
const arrayAll = [];
const measurement = [];
const ingredientsAll = [];
const ingredients =[];
const displayIng=[];

document.querySelector('button').addEventListener("click", function() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      for (let [key, value] of Object.entries(response.meals[0])) {
        arrayAll.push(`${value}`)
      } // Object.entries splits key pairs and returns values as strings. push values to array that has ALL values of array
      getIngredients() //calling function to display ingredients

      displayIng.forEach((el) =>{
        let list = document.querySelector("ul")
        let item = document.createElement("li")
        item.innerText = el;
        list.appendChild(item)
      }) //creates new li for each ingredient to display in DOM

      document.querySelector('.mealPhoto').src= response.meals[0].strMealThumb
      document.querySelector('h1').innerHTML= response.meals[0].strMeal
      document.querySelector('h2').innerHTML= "Ingredients"
      document.querySelector('h3').innerHTML= "Instructions"
      document.querySelector('.cuisine').innerHTML= response.meals[0].strArea
      document.querySelector('.instructions').innerHTML= response.meals[0].strInstructions

      //converts recipe name to string with %20 instead of spaces to input into second API's link
      let recipeName = response.meals[0].strMeal
      let recArr = recipeName.split(' ')
      let inputValue =""
      if (recArr.length >1){
        inputValue = recArr.join('%20')
      }
      else (
        inputValue = recipeName
      )
        //API takes recipe name and returns calories per serving
        fetch("https://api.edamam.com/api/food-database/parser?ingr="+`${inputValue}`+"&app_id=2ea762a3&app_key=aea8ec4c32a1e9b452bd55ee3fb2d054")
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(response => {
            let calories = response.hints[1].food.nutrients.ENERC_KCAL
            document.querySelector('.calories').innerHTML= Math.ceil(calories) + " calories per 100g"
          })
          .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
          });
  })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
});

// TO GET INGREDIENTS WITH MEASUREMENTS
function getIngredients(){
  for (let i=9;i<=28;i++){
    if(arrayAll[i] === null){
      measurement.push('')
    }else{
      ingredientsAll.push(arrayAll[i])
    }
  } // recipe ingredients are listed in arrayAll index 9 through 28. pushes ingredients into ingredientsAll array
  for (let i=29;i<=48;i++){
    if (arrayAll[i]===undefined){
      measurement.push('')
    }else{
      measurement.push(arrayAll[i])
    }
  } // recipe measurements are listed in arrayAll index 29 through 48. correspond to ingredients in order
  ingredientsAll.forEach((ingredient)=>{
    if(ingredient===""){
      return false
    } else {
      ingredients.push(ingredient)
    }
  }) // API has 20 available slots for ingredients. for.Each runs until we reach an empty string in ingredientsAll array. push to ingredients array (no empty strings)
  for (let count=0;count<ingredients.length;count++){
    displayIng.push(measurement[count]+" "+ingredients[count])
  } // displays ingredients with measurement
return displayIng
}
