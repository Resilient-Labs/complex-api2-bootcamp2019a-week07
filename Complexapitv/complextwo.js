// document.querySelector('button').addEventListener('click', findShow)

// function findShow(){ 
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     const search = document.querySelector('.search').value
//     const media = document.querySelector('.media').value
//     const url = `https://api.themoviedb.org/3/search/${media}?api_key=76de7b48f4d645900d5e14ed4ccab735&query=${search}`
   

//     let photos = "https://image.tmdb.org/t/p/original/"+data.results[0].backdrop_path
//     document.querySelector('img').src = photos

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
         
//         })
//         const gifurl = `https://api.giphy.com/v1/gifs/search?api_key=FQzzZfIgZsvvGf4CM9btZHLJx86kOqNN&q=${search}&limit=25&offset=0&rating=g&lang=en        `

//         fetch(gifurl)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
 
//         })
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// }

document.querySelector('button').addEventListener('click', findShow)
function findShow() { 
    let search = document.querySelector('.search').value
    let media = document.querySelector('.media').value
  fetch(`https://api.themoviedb.org/3/search/${media}?api_key=76de7b48f4d645900d5e14ed4ccab735&query=${search}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
     
      let syn = data.results[0].overview
      let rate = data.results[0].vote_average
      let real = data.results[0].first_air_date
      document.querySelector('.syn').innerText = syn
      document.querySelector('.real').innerText = real
      document.querySelector('.rate').innerText = rate
      const url = `https://api.giphy.com/v1/gifs/search?api_key=FQzzZfIgZsvvGf4CM9btZHLJx86kOqNN&q=${search}&limit=25&offset=0&rating=g&lang=en`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          let photos = data.data[0].images.downsized_medium.url
          document.querySelector('.picone').src = photos
          let photostwo = data.data[1].images.downsized_medium.url
          document.querySelector('.pictwo').src = photostwo
          
       
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}