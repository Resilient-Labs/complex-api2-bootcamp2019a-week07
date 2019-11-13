const btn = document.querySelector('.button').addEventListener('click', ()=>{
  const userInput = document.querySelector('.userInput').value
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${userInput}`)
    .then(res => res.json())
    .then(response => {
      let ingredient = response.meals[0].strIngredient2;
      let userIngredient = document.querySelector('.userIngredient')
      userIngredient.innerHTML= ingredient

      let foodApiKey = "604ba12755ba28d8b52b8863c3cc4358"
        fetch(`https://www.food2fork.com/api/search?key=${foodApiKey}&q=${ingredient}&page=2`)
          .then(res => res.json())
          .then(response =>{
            for (var i = 0; i < response.recipes.length; i++) {
              let recipeUrl = response.recipes[i].source_url
              let recipeTitles = response.recipes[i].title;

              const list = document.querySelector('#recipe-list')

              const row = document.createElement('tr')

              row.innerHTML = `
                <td>${recipeTitles}</td>
                <td><a href="#" class='delete'>${recipeUrl}</a></td>
              `
              list.appendChild(row)
            }
          })
          .catch(err=>{
            console.log(`err ${err}`)
    })
    .catch(err=>{
      console.log(`error ${err}`)
    })
})
})
