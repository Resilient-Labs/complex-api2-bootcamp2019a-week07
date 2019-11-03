let pokemonId = document.querySelector("input");
pokemonId.onchange = function (){
  pokemonId = document.querySelector("input").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => res.json())
    .then(res =>{
      document.querySelector("p").textContent = "Your Pokemon is: "+ res.name;
      let pokemon = res.name;
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=GGMJGgb6WoY8BsvTuNgQgpf7K2haqWc0&q=${pokemon}&limit=1&offset=0&rating=G&lang=en`)
        .then(res =>res.json())
        .then(res => {
          document.querySelector("img").src = res.data[0].images.downsized_large.url;
        })
        .catch(err => {
          console.log(`error ${err}`);
          alert('sorry, there are no results for your search');
        });
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert('sorry, there are no results for your search');
    });

}
