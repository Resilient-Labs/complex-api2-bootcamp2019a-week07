
document.querySelector('button').addEventListener('click', getMovie)

document.querySelector('input').addEventListener('keypress', runGetMovie)

function runGetMovie(e){
    if(e.keyCode === 13){
        e.preventDefault()
        getMovie()
    }
    
}


function getMovie() {

    let query = document.querySelector('.inputSearch').value

    let url = `https://api.themoviedb.org/3/search/person?api_key=511b4de757a069e9d52c03d442cf2afc&query=${query}&language=en-US&page=1&include_adult=false`


    fetch (url)

        .then(response => response.json())

        .then(data => {

            console.log(data);

            document.querySelector('.secResults').style.display = 'grid'

            let movieTitle = data.results[0].known_for[0].title

            document.querySelector('.h2MovieTitle').innerText = `Movie: ${movieTitle}`

            let overview = data.results[0].known_for[0].overview

            document.querySelector('.h3MoviePlot').innerText = `Overview: ${overview}`


            let url2 = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieTitle}&api-key=zxSdi4xMdS234wCW1TscwGyVQ12rHkRs
            `
        
            fetch(url2)
        
                .then(response => response.json())
        
                .then(data => {
                    console.log(data);
                    console.log(data.num_results);
        

                    if(data.num_results === 0){


                        document.querySelector('.h3ReviewSummary').innerText = 'Short Review : N/A'

                        document.querySelector('h4').innerText = 'Review URL: N/A'


                        document.querySelector('a').innerText = ''

                    } else {

                        document.querySelector('.h3ReviewSummary').innerText = `Short Review: ${data.results[0].summary_short}`

                        document.querySelector('a').innerText = 'See the full New York Times Review'

                        document.querySelector('h4').innerText = ''
                    }
        
                })
            
        })

        .catch(err => {
            console.log(`error ${err}`)
        });

}



