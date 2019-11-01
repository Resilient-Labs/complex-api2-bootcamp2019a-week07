const breedSelect = document.querySelector("#breedSelect");
const getImageButton = document.querySelector("#getImageButton");

getImageButton.addEventListener('click', showCatPicture);

function showCatPicture() {
    const catBreed = breedSelect.options[breedSelect.selectedIndex].value;

    /*

        Got Initial Breeds from this, will remove later
    
    fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
            "x-api-key": catApiKey
        }   
    })
        .then(res => res.json())
        .then(response => {
            let finalString = "<select>\n";
            response.forEach(el => {
                finalString += `\t<option value="${el.id}">${el.name}</option>\n`
            })
            finalString += "</select>"
            console.log(finalString);
        })*/

    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${catBreed}`, {
        headers: {
            "x-api-key": catApiKey
        }   
    })
        .then(res => res.json())
        .then(response => {
            console.table(response);
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=${response[0].breeds[0].name}&limit=1&offset=0&rating=G&lang=en`)
                .then(res => res.json())
                .then(response => {
                    console.table(response);
                    document.querySelector("#catImage").src = response.data[0].images.downsized_large.url;
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}
