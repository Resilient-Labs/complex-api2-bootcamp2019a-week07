document.querySelector("form").addEventListener("submit", function(e){
  let userInput = document.querySelector("#form").value;
  let apiUrl = `https://api.openbrewerydb.org/breweries?by_state=${userInput}`
  let wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${userInput}`
  e.preventDefault()
  fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      response.forEach(function(brew){
        console.log(brew.name)
        let info = document.createElement('p');
        document.getElementsByTagName("body")[0].appendChild(info);
        info.innerHTML = info.innerHTML + "<strong>Brewery name: </strong>" + brew.name
      })
    })
    fetch(wikiUrl)
    .then(res => res.json())
    .then(response =>{
      console.log(response)
      document.querySelector("#text").innerHTML = response.query.search[19].snippet
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
});
