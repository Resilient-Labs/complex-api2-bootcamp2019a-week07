const title = document.querySelector('h1');
const list = document.querySelector('#searchResults');
title.innerText = 'Anime Playlist';

document.querySelector('button').addEventListener('click', requestAccessToken)
document.querySelector('input').addEventListener('keydown', (e) => {if (e.code === 'Enter') requestAccessToken()})

function animeSearch(oAuth) {
    const input = document.querySelector('input').value;
    const urlFirst = `https://api.jikan.moe/v3/search/anime?q=${input}&order_by=title&sort=asc&limit=10`;
    
    list.innerHTML = '';
    fetch(urlFirst)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.results.forEach(result => {
            spotifySearch(result, oAuth);
        })
    })
    .catch(err => console.log(`animeSearch request: ${err}`));
}

function spotifySearch(result, access_token) {
    console.log(result);
    
    const url = `https://api.spotify.com/v1/search?q=name:${result.title}&type=playlist&offset=0&limit=1`;
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
                console.log(data.playlists.items.length);
                // console.log(data.playlists.items[0]['external_urls'].spotify);
                let playlist = '';
                const searchItem = document.createElement('li');;
                if (data.playlists.items.length > 0) {
                    playlist += data.playlists.items[0]['external_urls'].spotify;
                    searchItem.innerHTML = `<section class=\'titleBackground\'><h3>${result.title}</h3><h4><a href=\"${playlist}\">Playlist Found!</a></h4>`;
                }
                else
                searchItem.innerHTML = `<section class=\'titleBackground\'><h3>${result.title}</h3><h4>No playlist found</h4>`
                searchItem.style.backgroundImage = `url(${result.image_url})`;
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
    .then(data => animeSearch(data['access_token']))
    .catch(err => console.log(`requestAccessToken error: ${err}`));
}