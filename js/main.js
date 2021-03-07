//Goal: Grab cat fact from API, Grab random cat picture, and make a Meme!
//Property of GardnerGang
// Coded callobratively with house Gardner


document.querySelector('button').addEventListener('click', catFact)

function catFact(){

  let factsForCats = document.querySelector('button').value


  fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(data => {
      //Inside cat Fact
      let fact = data[Math.floor(Math.random() * Math.floor(4))].text
      console.log(data)
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          //inside catPic
          let catPic = data[0].url
          console.log(data)
          let memeText = fact.split(' ').join('_')
          memeText = fact.split('?').join('~q')
          memeText += '.jpg'
          let apiLink = `https://api.memegen.link/images/custom/_/${memeText}?background=${catPic}`

          fetch(apiLink)
            .then(res => res.blob())
            .then(img => {
              outside = URL.createObjectURL(img)
              document.querySelector('body').style.backgroundImage = `url(${outside}`
              console.log(catPic)
              console.log(outside)
              console.log(memeText)
              //inside blob

            })
            .catch(err => {
              console.log(`error ${err}`)
            })
        })
        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}

catFact()
