fetch(`https://ipapi.co/json/`)
  .then(response => response.json())
  .then(data =>{
    document.querySelector('#location').textContent= `You are in ${data.city}, ${data.region} `
    document.querySelector('#latitude').textContent= `Latitude: ${data.latitude} | Longitude: ${data.longitude}`
    document.querySelector('#ip').textContent = `ip: ${data.ip}`
    let lat= data.latitude
    let long = data.longitude
    fetch(`http://api.weatherstack.com/current?access_key=de08b7817c2823ddfd5c2482a17fdb67&query=${lat},${long}`)
      .then(res => res.json())
      .then(wdata=> {
        console.log(wdata);
        document.querySelector('#temp').textContent = `The weather in your area is ${wdata.current.weather_descriptions[0]}`;
      })
  })
