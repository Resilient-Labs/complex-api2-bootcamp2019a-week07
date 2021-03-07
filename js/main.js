//Goal: Grab cat fact from API, Grab random cat picture, and make a Meme!
//Property of GardnerGang: Worked together - Wade, Brian, Dashlin, Julie, Asianna, Tanecia, Ziya
document.querySelector('button').addEventListener('click', makeCatMeme)

function makeCatMeme() {
  let catFacts
  // Get cat facts
  fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(factData => {
      //Inside cat Fact - Randomize the facts
      console.log(factData)
      fact = factData.fact
      //-----------------------------
      // Get the cat image
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(imageData => {
          //Text overlay of images
          let catPic = imageData[0].url
          console.log(imageData)
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
