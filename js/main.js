//Goal: Grab cat fact from API, Grab random cat picture, and make a Meme!
//Property of GardnerGang: Worked together - Wade, Brian, Dashlin, Julie, Asianna, Tanecia, Ziya
document.querySelector('button').addEventListener('click', makeCatMeme)

function makeCatMeme(){
  let catFacts
// Get cat facts
  fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(data => {
      //Inside cat Fact - Randomize the facts
      let fact = data[Math.floor(Math.random() * Math.floor(4))].text
      console.log(data)
      //-----------------------------
      // Get the cat image
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          //Text overlay of images
          let catPic = data[0].url
          console.log(data)
          // Get file according to API documentation
          let memeText = fact.split(' ').join('_')
          memeText = fact.split('?').join('~q')
          memeText += '.jpg'
          let apiLink = `https://api.memegen.link/images/custom/_/${memeText}?background=${catPic}`
          // note: img src is called blob lol
          fetch(apiLink)
            .then(res => res.blob())
            .then(img => {
              outside = URL.createObjectURL(img)
              document.querySelector('img').src = `${outside}`
              console.log(catPic)
              console.log(catFacts)
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

makeCatMeme()
