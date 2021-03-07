document.querySelector('button').addEventListener('click',searchTheScripture)

// let fullName = `${firstName} ${lastName}`

function searchTheScripture() {
  let firstName = document.querySelector('.firstName').value
  let lastName = document.querySelector('.lastName').value
  const url = `https://www.balldontlie.io/api/v1/players?search=${firstName}%20${lastName}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('.fName').innerText = data.data[0].first_name
      document.querySelector('.lName').innerText = data.data[0].last_name
      document.querySelector('.team').innerText = data.data[0].team.full_name
      document.querySelector('span').innerText = data.data[0].position
      document.querySelector('.city').innerText = data.data[0].team.city
      console.log(data.data)


      let city = data.data[0].team.city

      const foursquareId = 'HDKT3MIIGFPD3NUAX0OCHYASFSIRL4CRIVNFBXCAKTOALYXJ';
      const foursquareSecret = 'T5WBJXVM5PNCQKBPONW2O0EJ4MHGDA2YLBDGWDAQV4MI5MZS';
      const foursquareUrl = 'https://api.foursquare.com/v2/venues/explore?near=';
      const url = `${foursquareUrl}${city}&limit=10&client_id=${foursquareId}&client_secret=${foursquareSecret}&v=20201202`
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.response.groups[0].items.forEach(item => {
          let container = document.createElement('div')

          let name = item.venue.name
          let category = item.venue.categories[0].name
          let icon = `${item.venue.categories[0].icon.prefix}bg_64${item.venue.categories[0].icon.suffix}`
          let location = item.venue.location.address
          let city = item.venue.location.city

          let nameholder = document.createElement('p')
          let categoryholder = document.createElement('span')
          let iconholder = document.createElement('img')
          let locationholder = document.createElement('p')
          let cityholder = document.createElement('p')

          nameholder.innerText = name
          categoryholder.innerText = category
          iconholder.src = icon
          locationholder.innerText = location
          cityholder.innerText = city

          container.appendChild(nameholder)
          container.appendChild(categoryholder)
          container.appendChild(iconholder)
          container.appendChild(locationholder)
          container.appendChild(cityholder)

          document.querySelector('.Displayplaces').appendChild(container)
          // document.querySelector('.name').innerText
          // document.querySelector('.address').innerText

        })
      })
      .catch(err => console.log(`error ${err}`))
    })
    .catch(err => console.log(`error ${err}`))
}


// const url = `https://api.edamam.com/search?q=tomato&app_id=e0855894&app_key=f45f326b1b404f6581175487ddb60233`
// const url = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'
// const url = "https://api.edamam.com/api/nutrition-data?app_id=e0855894&app_key=f45f326b1b404f6581175487ddb60233&ingr=chicken"
// `https://api.edamam.com/search?q=${userItems}&app_id=${app_id}&app_key=${app_key}`

// Simple API 1
// Goal: Display data returned from an api

// let app_id= "53817eeb"
// let app_key= "882ca7fe936a9cf2855f28173728b055"
//
//
// document.querySelector('button').addEventListener('click', getRecipe)
// function getRecipe(){
//   const userItems = document.querySelector('#item').value
//
//   console.log(userItems)
//   const url = `https://api.edamam.com/search?q=${userItems}&app_id=${app_id}&app_key=${app_key}`
// // const variabe go inside the function//
//   console.log(url)
//
//   let saveforlater =""
//   fetch(url)
//     .then(res => res.json()) //this is just the syntax//parse response as JSON//
//     .then(data=>{
//       console.log(data)
//       const results = data.hits //.hits is one of the responses from console.log(url of this specific API)//
//
//       console.log(data.hits[0].recipe.ingredients[0].text)//console log to show 1 of the ingredients from the array//
//       //how to call the array, use []//
//
//
//       //the recipe is not an array, the results is the array. Recipe is an property of the elements inside array//
//       for (j=0; j< results.length; j++){
//         const picture = results[j].image
//         const newPicture = document.createElement('img')
//         const recipe = results[j].recipe
//         const newRecipe = document.createElement('p')
//
//         document.querySelector('.dishes').appendChild(newRecipe)
//         newRecipe.innerHTML = recipe.label //it's label beause the name of the property inside recipe//
//         //////////////////////////////
//         document.querySelector('.dishes').appendChild(newPicture)
//         newPicture.src = recipe.image
//         //appendChild means you're adding things to the end of the targeted HTML section/element//
//         //creating a loop to repeat creation of each ingredient//
//         //here I am looping over the ingredients//
//         for (i=0; i< results[j].recipe.ingredients.length; i++){
//           const ingredient = results[j].recipe.ingredients[i]
//           const newElement = document.createElement('p')
//           newElement.innerHTML = ingredient.text
//           document.querySelector('.dishes').appendChild(newElement)
//               //Need to .createElement so that the text in the DOM does not get replaced//
//           saveforlater = ingredient.text
//         }
//       }
//
//     })
//     .catch(err =>{
//       alert(`error ${err}`)
//     })
//     ///Loop practice//
//   for (let i = 0; i<3;i++){
//     console.log(i)
//   }// the i loop will print out 012 //
//   console.log('break')
//   for (let i= 0; i<3; i++){
//     for (let j=0; j<3; j++){
//       console.log('result'+i,'ingredient'+j)
//
//     }// j loop  will print out 012  012 012
//   }// the i loop will print  000 111 222
//
//
// }
