let userAnswer = prompt("What Strain You Rollin Up?")

fetch(`https://strainapi.evanbusse.com/8lfd5Ab/strains/search/name/${userAnswer}`)
    .then(res => res.json())
    .then(response => {
      console.log(response);
      document.querySelector('h2').innerHTML = response[0].name
      document.querySelector('span').innerHTML = response[0].race
      document.getElementById('midP').innerHTML = response[0].desc

      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => res.json())
          .then(meal => {
            console.log(meal);
            document.querySelector('img').src = meal.meals[0].strMealThumb
            document.querySelector('h3').innerHTML = meal.meals[0].strMeal
          })

    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
