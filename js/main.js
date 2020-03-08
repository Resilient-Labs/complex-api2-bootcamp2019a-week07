const button = document.querySelector('button')
const luke = document.querySelector('button[name="Luke"]')
const kenobi = document.querySelector('button[name="Kenobi"]')

luke.addEventListener('click',()=>{

console.log(luke.value)

fetch(`https://swapi.co/api/people`)
.then(res => res.json())
.then(response => {

  let data = response.results.filter( character => character.name === luke.value)

  let ul = document.querySelector('#characterInfo')

  //let li =

  let height= document.createElement("li")
  let mass= document.createElement("li")
  let hairColor= document.createElement("li")
  let skinColor= document.createElement("li")
  let eyeColor= document.createElement("li")
  let birthYear= document.createElement("li")
  let textHeight = document.createTextNode(`height: ${data[0].height}`)
   let textMass = document.createTextNode(`mass: ${data[0].mass}`)
   let texthairColor = document.createTextNode(`hair color: ${data[0].hair_color}`)
   let textskinColor = document.createTextNode(`skin color: ${data[0].skin_color}`)
   let texteyeColor = document.createTextNode(`eye color: ${data[0].eye_color}`)
   let textbirthYear = document.createTextNode(`birth year: ${data[0].birth_year}`)

  height.appendChild(textHeight)
  ul.appendChild(height)

  mass.appendChild(textMass)
   ul.appendChild(mass)

   hairColor.appendChild(texthairColor)
  ul.appendChild(hairColor)

  skinColor.appendChild(textskinColor)
 ul.appendChild(skinColor)

 eyeColor.appendChild(texteyeColor)
ul.appendChild(eyeColor)

birthYear.appendChild(textbirthYear)
ul.appendChild(birthYear)




  })
  })

  kenobi.addEventListener('click',()=>{


  fetch(`https://swapi.co/api/people`)
  .then(res => res.json())
  .then(response => {
    console.log(response);

    let data = response.results.filter( character => character.name === kenobi.value)

    let ul = document.querySelector('#characterInfo')

    //let li =

    let height= document.createElement("li")
    let mass= document.createElement("li")
    let hairColor= document.createElement("li")
    let skinColor= document.createElement("li")
    let eyeColor= document.createElement("li")
    let birthYear= document.createElement("li")
    let textHeight = document.createTextNode(`height: ${data[0].height}`)
     let textMass = document.createTextNode(`mass: ${data[0].mass}`)
     let texthairColor = document.createTextNode(`hair color: ${data[0].hair_color}`)
     let textskinColor = document.createTextNode(`skin color: ${data[0].skin_color}`)
     let texteyeColor = document.createTextNode(`eye color: ${data[0].eye_color}`)
     let textbirthYear = document.createTextNode(`birth year: ${data[0].birth_year}`)

    height.appendChild(textHeight)
    ul.appendChild(height)

    mass.appendChild(textMass)
     ul.appendChild(mass)

     hairColor.appendChild(texthairColor)
    ul.appendChild(hairColor)

    skinColor.appendChild(textskinColor)
   ul.appendChild(skinColor)

   eyeColor.appendChild(texteyeColor)
  ul.appendChild(eyeColor)

  birthYear.appendChild(textbirthYear)
  ul.appendChild(birthYear)




  console.log(data);
    })
    })
