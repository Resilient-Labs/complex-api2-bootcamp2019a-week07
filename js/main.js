let Watch = {
      find: ()=>{
      document.querySelector('ul').innerHTML = ''
      Watch.input = document.querySelector('input').value
      document.querySelector('input').value = ''
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl+`http://www.omdbapi.com/?s=${Watch.input}&apikey=8ce696ca`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      Watch.titles = data.Search.sort((a,b)=>parseInt(b.Year.slice(0,4))-parseInt(a.Year.slice(0,4))).filter(x=>x.Type!==`game`).map(x=>x.Title)
      Watch.years = data.Search.sort((a,b)=>parseInt(b.Year.slice(0,4))-parseInt(a.Year.slice(0,4))).filter(x=>x.Type!==`game`).map(x=>x.Year.slice(0,4))
      Watch.ids = data.Search.sort((a,b)=>parseInt(b.Year.slice(0,4))-parseInt(a.Year.slice(0,4))).filter(x=>x.Type!==`game`).map(x=>x.imdbID)
      Watch.imgs = data.Search.sort((a,b)=>parseInt(b.Year.slice(0,4))-parseInt(a.Year.slice(0,4))).filter(x=>x.Type!==`game`).map(x=>x.Poster)
      Watch.youtubeNames = data.Search.sort((a,b)=>parseInt(b.Year.slice(0,4))-parseInt(a.Year.slice(0,4))).filter(x=>x.Type!==`game`).map(x=>`${x.Title} ${x.Year.slice(0,4)}`)

      let bunchOfPromises = Promise.all(
        Watch.titles.map((x,i)=>{
          return fetch(proxyurl+`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${x}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "3ae1d00c97msh298612aebb81230p11684djsn405007844583"
          }})
          .then(response => response.json()).then(x=>{
            console.log(x)
            document.querySelector('ul').innerHTML += `<li><h2>${Watch.titles[i]}</h2><img src="${Watch.imgs[i]}"/><a target="_blank" href="${x.results[0].locations.map(x=>`${x.url}"><img src="${x.icon}`).join(`"/></a><a target="_blank" href="`)}"/></a></li>`
          }).catch(err => console.log(err))
        }))
  })}
//       fetch(`https://youtube-rest-api.p.rapidapi.com/search?q=${Watch.input}`, {
//   	"method": "GET",
//   	"headers": {
//   		"x-rapidapi-host": "youtube-rest-api.p.rapidapi.com",
//   		"x-rapidapi-key": "3ae1d00c97msh298612aebb81230p11684djsn405007844583"
//   	}
//   }).then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
  }
