
const ul = document.querySelector("ul")

document.getElementById('noButton').addEventListener('click', function(){
  alert('try again :)');
})

document.getElementById('arizonaPrompt').addEventListener('click', function(){
  let arizonaAnswer = prompt('Type in your Answer! (lowercase please :) )')
  if (arizonaAnswer.toLowerCase() === 'arizona'){
    alert('You may proceed to Question 2')
  }
  if (arizonaAnswer.toLowerCase() !== 'arizona'){
    alert('Retry this question please')
  }
})



document.getElementById('yesButton').addEventListener('click', function(){
  // fetching the population Array
  fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
    .then(res => res.json())
    .then(directions =>{
      console.log(directions)
      // zooming into the 2018 population of the state of Arizona
      console.log(directions.data[7].Population)
      let arizona = directions.data[7].State;
      console.log(arizona)
      // showing the Result!
      document.getElementById('populationResult').innerHTML = `The 2018 Population of Arizona is: ${directions.data[7].Population}`
      // Having the next button

  /////////
  /// 20 breweries API
  /// after i click the next yes button run the next API with previous variable
  document.getElementById('yesButton2').addEventListener('click',function(){
  fetch(`https://api.openbrewerydb.org/breweries`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(breweries =>{
          let randoNumber = Math.round(Math.random()*15)
          if(breweries[randoNumber].state == arizona){
            document.getElementById('breweryResult').innerHTML =
            `
            name is: ${breweries[randoNumber].name} <br>
            type is: ${breweries[randoNumber].brewery_type} <br>
            address is: ${breweries[randoNumber].street} <br>
            phone number is: ${breweries[randoNumber].phone} <br>
            website is: ${breweries[randoNumber].website_url}`
            }



        })
      })

    })

})
