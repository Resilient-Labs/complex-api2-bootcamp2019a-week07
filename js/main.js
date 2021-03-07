document.querySelector('button').addEventListener('click', wordSearch )

// document.getElementsByClassName("reset").addEventListener("click", )

let apiKey = "39409c87fbmsh09f0425282cf00cp1eaf4ajsn0a4ef4959b87"

function wordSearch() {

    const term = document.querySelector("input").value

    let url = `https://wordsapiv1.p.rapidapi.com/words/${term}`

    fetch (url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "39409c87fbmsh09f0425282cf00cp1eaf4ajsn0a4ef4959b87",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    // .then(response => {
	//     response.text()}).then (data => {
    //         console.log(data);
    .then(data => {

        console.log(data)
        let description = data.results[0]['definition']
        giphyApi(term , description) 
        
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    // Guthemberg helped me with this part and is a GENIUS might I add !!! 

function giphyApi(text , definition){

    fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=T0jznlsubW13V7xCOLsFgaXlMTwg8HId&limit=1`)

        .then(res => res.json()) 
        .then(giphy => {
            const giphyLink =  `https://media.giphy.com/media/${giphy.data[0].id}/giphy.gif`

            // console.log(giphy.data[0])
          document.querySelector("img").src = giphyLink
          document.querySelector('h2').innerText = definition
        })
        .catch(err => {
        })
}
        
//     fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "39409c87fbmsh09f0425282cf00cp1eaf4ajsn0a4ef4959b87",
// 		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
// 	}
// })

        // let description = data.explanation
        // document.querySelector('h2').innerText = description
        // document.querySelector('.definition').innerText
// .catch(err => {
// 	console.error(err);
// })

    
}


