fetch("https://yesno.wtf/api/")
  .then(res => res.json())
  .then(response => {
    document.getElementById("yes").innerHTML = response.answer
    if (response.answer === "yes") {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(response => {
      console.log(response.meals[0].strArea)
      document.querySelector("h2").innerHTML = response.meals[0].strMeal
      document.querySelector("img").src = response.meals[0].strMealThumb
      document.querySelector("p").innerHTML = response.meals[0].strInstructions
      //document.getElementById("").innerHTML = response.meals[0]strArea + response.meals[0]strMeal + response.meals[0]strInstructions
    })
  }
  else {
     let seeResp = document.getElementById("no")
     seeResp.style.display = "block"
   }
  })
