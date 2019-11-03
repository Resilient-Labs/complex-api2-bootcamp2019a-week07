//
// let foodApiKey = "604ba12755ba28d8b52b8863c3cc4358"
// fetch(`https://www.food2fork.com/api/search?key=${foodApiKey}&q=chicken%20breast&page=2`)
//   .then(res => res.json())
//   .then(response =>{
//     console.log(response)
//   })
//   .catch(err=>{
//     console.log(`error ${err}`)
//   })
const select = document.querySelector('.mealSelection')

select.addEventListener('change', (event) => {

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(res => res.json())
  .then(response => {
    let listCategory = response.categories
    for (var i = 0; i < listCategory.length; i++) {
    let mealCategory = listCategory[i].strCategory;
    const select = document.querySelector('.mealSelection')
    let option = document.createElement('option');
    option.classList = mealCategory
    option.appendChild(document.createTextNode( mealCategory));
    select.appendChild(option);


  let foodApiKey = "604ba12755ba28d8b52b8863c3cc4358"
  fetch(`https://www.food2fork.com/api/search?key=${foodApiKey}&q=${select}&page=2`)
    .then(res => res.json())
    .then(response =>{
      console.log(response)
    })
    .catch(err=>{
      console.log(`err ${err}`)
  })
  .catch(err=>{
    console.log(`error ${err}`)
  })
}
})
})
