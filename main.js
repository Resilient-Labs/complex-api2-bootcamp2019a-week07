
document.getElementById('button').addEventListener('click', function (e){
  e.preventDefault()
  let artistName = document.getElementById('artistInput').value
  var api = `https://rest.bandsintown.com/artists/${artistName}?app_id=efee722b-db44-4336-9fc1-124825092cb8`;
fetch(api)
.then(res => res.json())
.then(response => {
insertData(response)
})
.catch(error => {
  console.log(`error ${err}`)
  alert("sorry, there are no results for your search")
  })
});


function insertData (data){
  console.log(data)
  let artistName = data.name
  let artistImage = data.image_url
  let songCount = data.tracker_count
   document.createTextNode('Recipe')
  //creates and appends content
   let name = document.getElementById('name').innerHTML = artistName
  document.getElementById('image').src = artistImage
  document.getElementById('tracks').innerHTML = songCount
  relatedArtrist(name)
};

function relatedArtrist (){
  var proxy = 'https://cors-anywhere.herokuapp.com/'
  let artistName =document.getElementById('name').innerHTML
  let api = `${proxy}https://tastedive.com/api/similar?q=${artistName}`
  fetch(api)
  .then(res => res.json())
  .then(related => {
  insertRelatedArtists(related)
  console.log(related.Similar.Results)
  })
  .catch(error => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
    })
  }



function insertRelatedArtists(data) {
  const ul = document.getElementById('relatedArtrist')
  console.log(data.Results)
  data.Similar.Results.forEach((el,i) => {
  let artistName = data.Similar.Results[i].Name
  let text = document.createTextNode(artistName)
  //creates and appends recipe link
  let li = document.createElement('li')
  li.appendChild(text)
  ul.appendChild(li)
})
}
