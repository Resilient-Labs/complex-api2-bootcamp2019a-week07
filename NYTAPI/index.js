const api = "2PfAg4L80izFGz9KMXKMQQFfwGoihW7U";
const api2 = "UZJK1r25j5TVlzdcexKRUG6LsWU3dbue"
const btn= document.querySelector('button')
const result = document.querySelector('#hi')



btn.addEventListener('click', ()=>{
  const dropdown = document.querySelector('#dropdown').value
fetch(`https://api.nytimes.com/svc/topstories/v2/${dropdown}.json?api-key=${api2}`)
  .then(res => res.json())
  .then(json => {
    let story = json.results[0].title
console.log(json)
            let newsTitle = json.results
            for(let i=0; i<5; i++){
              if(newsTitle[i]<=newsTitle[5]){
                var textNode = document.createElement("div");
                 textNode.innerHTML = `<a href="${newsTitle[i].short_url}" target=_blank"">${newsTitle[i].title}</a><br>${newsTitle[i].abstract}`;
                result.appendChild(textNode);
          }

      }

    fetch(`https://api.giphy.com/v1/gifs/search?q=${story}&api_key=${api}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
    console.log(response)
          let images = response.data[0].images.downsized.url
          document.querySelector('img').src = images;
})
.catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});

})


.catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});
})
