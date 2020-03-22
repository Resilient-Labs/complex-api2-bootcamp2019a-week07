let city;
let state;
// let result = document.querySelector("h2")
const btn = document.querySelector('button')
btn.addEventListener("click", ()=>{
city =  document.querySelector('#city').value;
state = document.querySelector('#state').value;
const beerList = document.querySelector('#beerList');




fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    response.forEach(el => {
      console.log(el)
      let long = el.longitude
      let lat = el.latitude
      let newItem = document.createElement('li');
      let p = document.createElement('p')
      let name = el.name


      if(long !== null && lat !== null){
        let longitude = parseFloat(long)
        let latitude = parseFloat(lat)
        fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`)
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(response => {
            console.log(response)
              let sunRise= response.results.sunrise
              let sunSet= response.results.sunset
              p.innerHTML = `${name} sunrise:${sunRise} sunset:${sunSet}`
            })

          .catch(err => {
              console.log(err)
          });
      }else{
        p.innerHTML = `${name} : no time available`
      }
      newItem.appendChild(p);
      beerList.appendChild(newItem);

    }) // for each element


  }) // first fetch





  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });


}) // main button evt listener
// let brewery = document.querySelectorAll('link')
// console.log(brewery)
// brewery.addEventListener('click', ()=>{
//   let long = parseFloat(this.getAttribute("data-long"))
//   let lat = parseFloat(this.getAttribute("data-lat"))
//   console.log(long,lat)
// }) // link event listener
