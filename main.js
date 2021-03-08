document.querySelector('button').addEventListener('click', requestAccessToken)
const list = document.querySelector('ul')


function searchMusic(oAuth){
    let movie = document.querySelector('input').value
    // always use https://
    let url = `https://api.themoviedb.org/3/search/movie?api_key=d4d60447ae7552fd91ebd1e5f3acb658&query=${movie}`
   
    fetch(url)
    .then(res => res.json())
    .then(data => {
    // console.log(data)
    data.results.forEach(result => spotifySearch(result,oAuth))
    
    // document.querySelector('h2').innerText = 
    // document.querySelector('h3').innerText = data.data[0].atk
    // document.querySelector('#race').innerText = data.data[0].race
    // document.querySelector('#type').innerText = data.data[0].type
    // document.querySelector('h5').innerText = data.data[0].desc
    })
    
    }
function spotifySearch(movie, access_token) {
        console.log(movie);
        const url = `https://api.spotify.com/v1/search?q=name:${movie.title}&type=playlist&offset=0&limit=1`;
                fetch(url, {
                    "method":"GET",
                    "headers": { 
                        "Accept": "application/json", 
                        "Content-Type": "application/js",
                        "Authorization": `Bearer ${access_token}`
                    }
                })
                .then(res => res.json())
                .then(data => { 
                    // console.log(data.playlists.items.length);
                    // console.log(data.playlists.items[0]['external_urls'].spotify);
                    let playlist = '';
                    const searchItem = document.createElement('li');;
                    if (data.playlists.items.length > 0) {
                        console.log(movie['original_title'])
                        playlist += data.playlists.items[0]['external_urls'].spotify;
                        searchItem.innerHTML = `<section class=\'titleBackground\'><h3>${movie['original_title']}</h3><h4><a href=\"${playlist}\">Playlist Found!</a></h4>`;
                    }
                    else
                    searchItem.innerHTML = `<section class=\'titleBackground\'><h3>${movie['original_title']}</h3><h4>No playlist found</h4>`
                    searchItem.style.backgroundImage = `url(https://d2j1wkp1bavyfs.cloudfront.net/image-assets/${movie['id']}/${movie['backdrop_path']}?d=360x540&q=60)`;
                    list.appendChild(searchItem);
                })
                .catch(err => console.log(`spotifySearch error: ${err}`));
    }
        function requestAccessToken() {
            const url = 'https://accounts.spotify.com/api/token';
            const clientIDAndKey = 'YTMxOTJhMzRhYzg2NGI4OWFmZjNmMzRjN2M0N2JhN2I6MDNhMWE4MTc2ZTNkNGZkMmFlNTkyODI0YzJkNGNkZDg='
            fetch(url, {
                "method": "POST",
                "body": `grant_type=client_credentials`,
                "headers": {
                    "Authorization": `Basic ${clientIDAndKey}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => res.json())
            .then(data => searchMusic(data['access_token']))
            .catch(err => console.log(`requestAccessToken error: ${err}`));
        }
    