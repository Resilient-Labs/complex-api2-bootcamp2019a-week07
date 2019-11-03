const btn= document.querySelector(".button2")
btn.addEventListener('click', ()=>{
let apikeys="ZFarW6AGITd17TUIyPJqxo5sMYi6rjBBI49zJfnoxAaanZBBSGeuV67eMqDKyTI1";
let song = document.querySelector(".song").value;
let artists = document.querySelector(".artist").value;

    fetch(`https://orion.apiseeds.com/api/music/lyric/${artists}/${song}?apikey=${apikeys}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
          document.querySelector(".apiSeeds").innerHTML = response.result.track.text
          // document.querySelector("img").src = response._embedded.events[10].images[0].url

    const apikey= "04f12478jZwGRa7Kl9XhtsstQlDZSsLYH6eNiLr0Trl1oTu19itfgokG"
    fetch(`https://api.happi.dev/v1/music?limit=50&apikey=${apikey}&q=${artists}`)
              .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
              .then(response => {
                response.result.forEach(function(x){
                  let li= document.createElement("li");
                  let text = document.createTextNode(x.track);
                  li.appendChild(text);
              document.querySelector(".happyRes").appendChild(li);
      })
    })
        .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
      })
    .catch(err => {
     //console.log(`error ${err}`)
     alert("sorry, there are no results for your search")
     })
   })
 })
