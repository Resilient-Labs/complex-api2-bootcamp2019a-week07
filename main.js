// mapbox api
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbmRhMDEiLCJhIjoiY2p4ejN3bWJ5MDA5MzNjazJoY3A2d2ZnMSJ9.7GWklMxOmO4bMCyITUImag';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-27.4512, 20.6568],
zoom: 13
});
console.log(mapboxgl)





// foursquare api
document.querySelector("button").addEventListener("click", () => {

  // clears with new input
  document.querySelector(".placeContainer").innerHTML = ""

  let location = document.querySelector("input").value

  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=OPNV413H5AK5YUB31QPBWIUNHIWXRKRUKLBY3NV0B53S4PGF&client_secret=UBUDRV5X53W0ANPYRYKTSDYTAHRCGFSSW2AYWO1TGWFOE2IK&v=20180323&limit=10&near=${location}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      // lat & long variables
      let lng = response.response.geocode.center.lng
      let lat = response.response.geocode.center.lat
      // map.setCenter was from the doc -> mapbox
      // map.setCenter takes a lng & lat and centers map to coordinate
      map.setCenter([lng,lat])
      // places variable
      let places = response.response.groups[0].items
      places.forEach((place, i) => {
        console.log(place)
        let lng = place.venue.location.lng
        let lat = place.venue.location.lat
        var marker = new mapboxgl.Marker()
          .setLngLat([lng,lat])
          .addTo(map);


        var placeDiv = document.createElement("div")

        // creating a placeholder for the places
        var placeName = document.createElement("span")
        placeName.innerHTML = "Name: " + place.venue.name //`Name:${place.name}`
        placeDiv.appendChild(placeName)

        //div for list of places and a div for places itself
        document.querySelector(".placeContainer").appendChild(placeDiv)

      })

    })
})
