const breedSelect = document.querySelector("#breedSelect");
const getImageButton = document.querySelector("#getImageButton");
const catImage = document.querySelector("#catImage");

getImageButton.addEventListener('click', showCatPicture);

function showCatPicture() {
    const catBreed = breedSelect.options[breedSelect.selectedIndex].value;

    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${catBreed}`, {
        headers: {
            "x-api-key": catApiKey
        }   
    })
        .then(res => res.json())
        .then(response => {
            console.table(response);
            const catSearch = encodeURIComponent(`${response[0].breeds[0].name} cat`);
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=${catSearch}&limit=1&offset=0&rating=G&lang=en`)
                .then(res => res.json())
                .then(response => {
                    console.table(response);
                    catImage.src = response.data[0].images.downsized_large.url;
                    catImage.alt = `${catBreed} gif`;
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}
