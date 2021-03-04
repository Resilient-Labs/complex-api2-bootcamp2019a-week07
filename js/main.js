// Access-Control-Allow-Origin: https://javascript.info

/********
Display weather
*********/
const key1 = config.API_KEY1
const key2 = config.API_KEY2
const urlUnsplash = `https://api.unsplash.com/photos/random?client_id=${key1}`
const urlSound = `https://api.discogs.com/database/search?token=${key2}&per_page=1&type=release&q=`

//Input Constants
const category = document.querySelector('#category')

//reponse Constants
const songs = document.querySelector('#song')
const img = document.querySelector('img')

document.querySelector('button').addEventListener('click', clicky)

function clicky() {
  songs.innerHTML =''
  fetch(urlUnsplash)
    .then(res => res.json())
    // parse response as JSON
    .then(data => {
      console.log(data)
      img.src = data.urls.regular
      let query = data.alt_description.split(' ')
      fetch(urlSound+query[0])
              .then(res => res.json())
              // parse response as JSON
              .then(data2 => {
                console.log(data2)
                let link = document.createElement('a')
                if(data2.results[0].master_url){
                  link.href = data2.results[0].master_url
                }

                let title = document.createElement('h3')
                title.innerText = data2.results[0].title
                link.appendChild(title)
                songs.appendChild(link)

              })
              .catch(err => {
                console.log(`error ${err}`)
              });
    })
    .catch(err => {
      console.log(`error ${err}`)
    });


}






// working Book fetch
//
// fetch(urlBooks)
//         .then(res => res.json())
//         // parse response as JSON
//         .then(data2 => {
//           console.log(data2)
//         })
//         .catch(err => {
//           console.log(`error ${err}`)
//         });
