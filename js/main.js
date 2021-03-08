//when button is pressed browser will relay a random cat fact (using cat-fact herokuapp) and random cat pic (using api.catapi)

//create an event listener for click
document.querySelector('button').addEventListener('click', getYourCat)

//create a function for when button is click 
function getYourCat() {
    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            document.getElementById('image').src = data[0]['url']
        })

    fetch(`https://cat-fact.herokuapp.com/facts`)
        .then(res => res.json())
        .then(data => {
           // console.log(data)
            let randomCatFact = Math.floor(Math.random()*data.length)
            let catFact = data[randomCatFact]

            document.getElementById('word').innerHTML=catFact['text']

        })

}