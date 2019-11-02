let btn = document.querySelector('button')
btn.addEventListener('click', function() {
  let arr = []
  let tier = document.querySelector('.tier').value
  let division = document.querySelector('.division').value
  let ul = document.querySelector('ul')
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/${tier}/${division}?api_key=${api_key}`
  fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(response => {
      ul.innerHTML = '';
      for (let i = 0; i <= 100; i++) {
        arr.push(response[i].summonerName);
      }
      arr.sort()
      arr.forEach(function(x) {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(x))
        ul.appendChild(li)
      })
      let items = ul.getElementsByTagName('li');
      for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
          let summonerId = response[i].summonerId;
          let secondTargetUrl = `https://na1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${summonerId}?api_key=${api_key}`
          fetch(proxyUrl + secondTargetUrl)
            .then(res => res.json())
            .then(response => {
              let score = document.querySelector('.score')
              score.innerHTML = response
            })
            .catch(err => {
              console.log(`error ${err}`);
            })
        })
      }
    })
    .catch(err => {
      console.log(`error ${err}`);
    })

})
