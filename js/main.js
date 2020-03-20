const randomPokemon = prompt('write a number from 1-100')
      fetch(`https://api.pokemontcg.io/v1/cards`)
        .then(res => res.json())
        .then(response => {

          console.log(response.cards[randomPokemon].imageUrl)
          document.querySelector('img').src=response.cards[randomPokemon].imageUrl

        })

        fetch("http://api.icndb.com/jokes")
            .then(res => res.json())
            .then(chuck => {
              console.log(chuck.value[randomPokemon-1])
              document.getElementById('chuckNorrisQuote').innerHTML = chuck.value[randomPokemon-1].joke
            })









    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")


    });
