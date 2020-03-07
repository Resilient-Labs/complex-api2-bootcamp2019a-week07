document.addEventListener("DOMContentLoaded", () =>{

    let genButton = document.querySelector('#generate-pokemon');
    genButton.addEventListener('click', displayEverything)

    deleteButton().addEventListener('click', deleteEverything);
})

function displayEverything(){
    let allPokemonBox = document.querySelector('#poke-box')
    allPokemonBox.innerText = "";
    fetchKantoPokemon();

    deleteButton().style.display = 'block'
}

function deleteButton(){
    return document.querySelector('#delete-btn')
}


function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch.
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        displayPokemon(pokeData)
    })
}


function displayPokemon(pokeData){
    let allPokemonBox = document.getElementById('poke-box');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`

    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types


    createTypes(pokeData.types, pokeTypes) // helper function to go through the types array and create li tags for each one

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonBox.appendChild(pokeContainer);//appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function deleteEverything(event){
    event.target.style = 'none';
    let allPokemonBox = document.querySelector('#poke-box')
    allPokemonBox.innerText = ""

    let genButton = document.createElement('button')
    genButton.innerText = "Generate Pokemon"
    genButton.id = 'generate-pokemon'
    genButton.classList.add('ui', 'secondary', 'button')
    genButton.addEventListener('click', displayEverything);

    allPokemonBox.append(genButton)
}
