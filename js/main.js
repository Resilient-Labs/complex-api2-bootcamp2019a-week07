document.querySelector("button").addEventListener("click", strain);

function strain(e) {
  e.preventDefault();
  let apiURL = "http://strainapi.evanbusse.com/mvet9Uc/strains/search/all";
//get the api
  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        // json returns object of object , the propertie of each objects is the name of the string
      let strainArray = Object.keys(response);
      //itterating through the array to pass each string name through the wiki api
      strainArray.forEach(function(el) {
        wiki(el);
      });
    })
    .catch(err => {
      alert("sorry nah");
    });
}

function wiki(strain) {
  let apiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
    encodeURI(strain) +
    "&format=json";

  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        //making list items with string names and wikipedia description
      let list = document.querySelector("ul");
      let listItem = document.createElement("li");
      listItem.innerHTML = `<li>${strain}</li>
      <p>${response[2][0]}</p>`;
      list.appendChild(listItem);
    })
    .catch(err => {
      alert("sorry nah");
    });
}