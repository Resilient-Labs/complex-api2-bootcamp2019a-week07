// alert("fearless overlord")
fetch(`https://www.behindthename.com/api/related.json?key=er246792804&${name}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
