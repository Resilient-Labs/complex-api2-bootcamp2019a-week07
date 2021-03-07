
document.querySelector('button').addEventListener('click', findRecipe)

function findRecipe(){
    const search = document.querySelector('.search').value
    const media = document.querySelector('.media').value
    const url = `https://api.themoviedb.org/3/search/${media}?api_key=68a28c04a6c39555aee4d313f871280c&query=${search}`
    


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
         
        document.querySelector('.picture').src = "https://image.tmdb.org/t/p/original/"+data.results[0].poster_path
        document.querySelector(".name").innerText = " " +data.results[0].name
        document.querySelector(".air").innerText = " " +data.results[0].first_air_date
        document.querySelector(".rat").innerText = " " +data.results[0].vote_average
        document.querySelector(".pop").innerText = " " + parseInt(data.results[0].popularity)
        document.querySelector(".sum").innerText = data.results[0].overview
        })
        const gifurl = `https://api.giphy.com/v1/gifs/search?api_key=scfRCJdmPIA7RwBxFu0FAs0EHS5IvaFh&q=${search}&limit=25&offset=0&rating=g&lang=en`

        fetch(gifurl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for(let i = 0; i < 6; i++){
                document.querySelector('.gif' + i).style.backgroundImage = "url(" + data.data[i].images.downsized_medium.url +")"
                document.querySelector('.gif' + i).style.backgroundSize = "cover"

                }
        })
    .catch(err => {
        console.log(`error ${err}`)
    })

}
