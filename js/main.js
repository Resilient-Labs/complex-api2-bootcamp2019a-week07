let movie = {
    button: document.getElementById('button'),
    input: document.getElementById('input'),
    title: document.getElementById('title'),
    trailerHead: document.getElementById("trailerHead"),
    trailer: document.getElementById('trailer'),
    img: document.getElementById('img'),
    score: document.getElementById('score'),
    lang: document.getElementById('lang'),
    time: document.getElementById('time'),
    plot: document.getElementById('plot'),

    getMovie(){
        let input = movie.input.value.replace(" ","+");

        fetch(`http://www.omdbapi.com/?s=${input}&apikey=1a115513`)
            .then(response => response.json())
            .then(data => {
                movie.title.innerHTML = data.Search[0].Title
                movie.img.style.display= "inline"
                movie.img.src = data.Search[0].Poster

                let movieID = data.Search[0].imdbID;

                fetch(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${movieID}&token=a863f7bb-b5e4-4ab8-8cc3-f13a527d67f7&format=json&language=en-us&trailers=1`)
                    .then(response => response.json())
                    .then(info => {
                        console.log(info)
                        movie.time.innerHTML= info.data.movies[0].runtime
                        movie.score.innerHTML= `Metascore: ${info.data.movies[0].metascore}`
                        movie.lang.innerHTML= info.data.movies[0].languages[0]
                        movie.plot.innerHTML= info.data.movies[0].plot
                        movie.trailer.style.display= "inline"
                        movie.trailer.src= info.data.movies[0].trailer.qualities[1].videoURL
                    })
            })
    }
}

movie.button.addEventListener("click", movie.getMovie);
