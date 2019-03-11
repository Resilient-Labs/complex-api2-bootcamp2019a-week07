document.querySelector('form').addEventListener('submit', history)  

function history(e){
  e.preventDefault()
  let stateName = document.querySelector('input').value
 

  fetch(`https://chroniclingamerica.loc.gov/suggest/titles/?q=` + stateName)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        // console.log(response);
        
        console.log(response[1]);
        
        // document.querySelector('p').textContent = response.florida
        
        const section = document.getElementById('alpha');
        //setting up section to call later to add appendchild
        response[1].forEach(function(state){
        //itterate through the response array and give each indexes
        const article = document.createElement('p')
        //gunna put every article that is showing up into p tag
        
        article.innerHTML = `<p>${state}</p>`
        section.appendChild(article);
        })

    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}