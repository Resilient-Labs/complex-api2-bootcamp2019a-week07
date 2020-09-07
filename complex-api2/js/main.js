function getWord () {
  let word = document.querySelector("input");
  word = document.querySelector("input").value;
  fetch(`https://dictionaryapi.com/api/v3/references/sd4/json/${word}?key=08d2b81a-49f3-4827-b2f5-062018314310`)
    .then(res => res.json())
    .then(dictionary => {
      document.querySelector("h2").innerHTML = "Word: " + word
        let ul = document.querySelector("ul")
        for (let i = 0; i < dictionary.length; i++) {
          let entry = dictionary[i];
          let li = document.createElement('li');
          ul.appendChild(li);
          li.innerHTML = li.innerHTML + entry.meta.id + ": " + entry.fl + ", " + entry.shortdef
        }
  fetch(`https://words.bighugelabs.com/api/2/3d63cb92223d853dbba314b9a38109ed/${dictionary[0].meta.id}/json/`)
    .then(res => res.json())
    .then(response => {
        document.getElementById("Synonyms").innerHTML = "Synonyms:"
        document.getElementById("syn").innerHTML = response.noun.syn
    })
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=vXLfTIwMsOyyAKrldBFWwsZeAQUGlTX7&q=${dictionary[0].meta.id}&limit=25&offset=0&rating=g&lang=en`)
    .then(res =>res.json())
    .then(res => {
        document.querySelector("img").src = res.data[1].images.downsized_large.url;
    })
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("Sorry, there are no results for your search")
  })
}

document.querySelector("button").addEventListener('click', (e) => {
  getWord()
})
document.querySelector("button").addEventListener('click', (e) => {
  let li = document.querySelectorAll("li");
  let ul = document.querySelector("ul")
   for(let i = 0; i < li.length; i++){
     ul.removeChild(li[i]);
   }
 })
document.querySelector("input").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    getWord()
  }
})
document.querySelector("input").addEventListener("keypress", (e) => {
  let li = document.querySelectorAll("li");
  let ul = document.querySelector("ul")
   for(let i = 0; i < li.length; i++){
     ul.removeChild(li[i]);
   }
 })
