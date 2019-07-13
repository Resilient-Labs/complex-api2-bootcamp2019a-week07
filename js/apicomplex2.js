mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpbmFhZGlyYSIsImEiOiJjankwbDRwbmIwNGFoM29ucWJkbTVzdWI4In0.trxOOpUcFsgIfc0MX4VvQQ';


document.querySelector("button").addEventListener("click", function() {
  const userInput = document.querySelector("input").value


  fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts")
    .then(res => res.json())
    .then(response => {

      for (let i = 0; i < response.length; i++) {

        if (userInput === response[i].city) {
          // console.log(response[i].longitude,response[i].latitude)
          let name = response[i].name;
          let ul = document.querySelector("ul")
          let li = document.createElement('li');
          let longitude = response[i].longitude;
          let latitude = response[i].latitude;
          li.appendChild(document.createTextNode(name));
          ul.appendChild(li);
          // let ll = new mapboxgl.LngLat(-73.9749, 40.7736);
          new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [response[i].longitude, response[i].latitude], // starting position [lng, lat]
            zoom: 1 // starting zoom
          });
        }


      }
      console.log(response)
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})
// **************************************************************************************
