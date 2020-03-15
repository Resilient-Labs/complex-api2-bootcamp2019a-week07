
document.querySelector("button").addEventListener("click", () => {
fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=pl4wQiDlOWEWMNp7pRbhrnLmh9sI57E6`)
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes);
      document.getElementById("first").innerHTML = (`New York Times: ${jsonRes.results[0].title} See More: ${jsonRes.results[0].url}`)
      document.getElementById("second").innerHTML = (`New York Times: ${jsonRes.results[1].title} See More: ${jsonRes.results[1].url}`)
      document.getElementById("third").innerHTML = (`New York Times: ${jsonRes.results[2].title} See More: ${jsonRes.results[2].url}`)

    fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=e3610689a7fe4954afa88feadebe18bf`)
      .then(res => res.json())
      .then(jsonRes => {
        console.log(jsonRes);
        document.getElementById("fourth").innerHTML = (`${jsonRes.articles[0].source.name}: ${jsonRes.articles[0].title} See More: ${jsonRes.articles[0].url}`)
        document.getElementById("fith").innerHTML = (`${jsonRes.articles[1].source.name}: ${jsonRes.articles[1].title} See More: ${jsonRes.articles[1].url}`)
        document.getElementById("sixth").innerHTML = (`${jsonRes.articles[2].source.name}: ${jsonRes.articles[2].title} See More: ${jsonRes.articles[2].url}`)
      })
    })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
})
