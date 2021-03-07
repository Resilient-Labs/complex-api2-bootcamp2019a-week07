document.querySelector('.firstBtn').addEventListener('click', getActors)


function getActors(){
  let tvShow = document.querySelector('input').value

  const url = `http://api.tvmaze.com/singlesearch/shows?q=${tvShow}&embed=cast`

  fetch(url)
   .then(res => res.json()) // parse response as JSON
   .then(data => {
     console.log(data)
     console.log(data.name)
     console.log(data.network.name)
     console.log(data.image)
     console.log(data.summary)
     console.log(data.type)
     console.log(data._embedded.cast)
     console.log(data._embedded.cast[0].character)



     let list = document.querySelector('#list')
     let listTwo = document.querySelector('#listCast')
     let one = document.querySelector('.characterSec')
     let two = document.querySelector('.actorSection')
     let three = document.querySelector('.listMTV')

     // let listName = document.createElement('ul')
     // let listImage = document.createElement('img')
     // let listSummary = document.createElement('li')
     // let listType = document.createElement('li')
     // let listNetwork = document.createElement('li')
     document.querySelector('h2').innerText = 'Show: ' + data.name
     document.querySelector('.type').innerText = data.type
     document.querySelector('.network').innerText = data.network.name
     document.querySelector('p').innerHTML = 'Summary: ' + data.summary
      document.querySelector('img').src = data.image.medium


     // listName.innerText += data.name
     // listImage.src += data.image.medium
     // listSummary.innerHTML += data.summary
     // listType.innerText += data.type
     // listNetwork.innerText += data.network.name

     // list.appendChild(listName)
     // listName.appendChild(listImage)
     // listName.appendChild(listSummary)
     // listName.appendChild(listType)
     // listName.appendChild(listNetwork)

     for(let i = 0; i < data._embedded.cast.length ;i++){
       // let listCastC = document.createElement('li')
       // let listCastCImg = document.createElement('img')
       let listCastP = document.createElement('li')
       let listCastPImg = document.createElement('img')

       // listCastC.innerText += 'Character: ' + data._embedded.cast[i].character.name
       // listCastCImg.src += data._embedded.cast[i].character.image.medium
       listCastP.innerText += 'Actor: ' + data._embedded.cast[i].person.name
       listCastPImg.src += data._embedded.cast[i].person.image.medium

       // one.appendChild(listCastC)
       // one.appendChild(listCastCImg)
       two.appendChild(listCastP)
       two.appendChild(listCastPImg)


       let apiKey = 'b444a22e0086f6af5c4fce0a6843614a'
       let actorName = data._embedded.cast[i].person.name


         const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${actorName}&page=1&include_adult=false`

         fetch(url)
         .then(res => res.json()) // parse response as JSON
         .then(data => {
         console.log(data)
         console.log(data.results[0].name)
         console.log(data.results[0].known_for[0].title)
         console.log(data.results[0].known_for_department)
         for(let i = 0; i < data.results[0].known_for.length; i++){

           if(data.results[0].known_for[i].media_type === "movie"){
             let listCastTitle = document.createElement('li')
             listCastTitle.innerText += 'Movie Starred in: ' +data.results[0].known_for[i].title
             listCastP.appendChild(listCastTitle)

           }
            else if(data.results[0].known_for[i].media_type === "tv"){
            let listCastName = document.createElement('li')
            listCastName.innerText += 'Show Starred in: ' + data.results[0].known_for[i].original_name
            listCastP.appendChild(listCastName)
            }

         }

         })
         .catch(err => {
           console.log(`error ${err}`)
         });
     }

  })

}
// function idk(){
//   let kw = document.querySelector('.cool')
//   kw.style.setProperty('display', 'block')
// }
