//worked on code with House Hayden: Anastasia, Kathy, Jeff, and Rebecca

const btn = document.getElementById('button');
let count=0; //set to the index so on every click, count goes up and gives diff breed

btn.addEventListener('click', ()=> {

  fetch('https://catfact.ninja/breeds?limit=100')
  .then(response => response.json())
  .then(info => {
    let breedVar = info.data[count].breed;
      document.getElementById('breed').innerHTML = breedVar;
      console.log(info)
      count++;
      fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedVar}`)
        .then(response => response.json())
        .then(info => {
          document.getElementById('url').href = info[0].vetstreet_url;
          document.getElementById('link').style.display = 'inline';
          console.log(info)
        })
  })
})
