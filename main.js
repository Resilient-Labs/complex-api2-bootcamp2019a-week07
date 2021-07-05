document.querySelector("button").addEventListener("click", () => {
    let quote = document.getElementById("quotes");
    let url = "https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    let uRL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=" ;
    fetch(url, {cache: "no-store"})
      .then(res => res.json())
      // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        quote.innerHTML=response["0"].content;
        console.log(response)
       fetch(uRL + response["0"].title)
         .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
         .then(response => {
           console.log(response);
           document.querySelector("#wiki").innerHTML = response.query.search[0].snippet;
         })
         .catch(err => {
           console.log(`error ${err}`);
           alert("We're sorry! We can't find the description for this one.");
         });
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert("sorry, there are no results for your search");
      });
 });
