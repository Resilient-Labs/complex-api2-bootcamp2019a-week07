const url1 = "https://pirates.p.rapidapi.com/pirate/generate/insult"
const url2 = "https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult"

document.querySelector('button').addEventListener('click', capnRap)
function capnRap() {
  fetch(url1, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "c477f8cef6msh635b500383161c9p1c3cefjsn5bdb4b34d4b2",
  		"x-rapidapi-host": "pirates.p.rapidapi.com"
      }
    })
    .then (res=> res.json())
    .then (data=>{
        document.querySelector('#pirateTalk').innerText = data.contents.taunts
        fetch(url2, {
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-key": "c477f8cef6msh635b500383161c9p1c3cefjsn5bdb4b34d4b2",
        		"x-rapidapi-host": "shakespeare1.p.rapidapi.com"
        	}
        })
          .then (res => res.json())
          .then (data2 =>{
            console.log(data2);
            document.querySelector('#sonnetSpeak').innerText = data2.contents.taunts[0];
          })
      })
}
