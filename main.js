document.getElementById("second").style.visibility = "hidden";
document.getElementById("first").onclick = function(){
  fetch(`http://api.open-notify.org/astros.json`)
    .then(res => res.json())
    .then(res => {
      document.getElementById("first").style.visibility = "hidden";
      let itemToAdd;
      for(let i =0;i<res.people.length;i++){
        itemToAdd= res.people[i].name;
        let input =document.createElement("INPUT");
        input.type = "radio";
        input.name = "astro";
        input.id = itemToAdd;
        let label = document.createElement("LABEL");
        label.for = itemToAdd;
        label.textContent = itemToAdd;
        document.querySelector("form").appendChild(input);
        document.querySelector("form").appendChild(label);
      }
      document.getElementById("second").style.visibility = "visible";
    })
    .catch(err =>{
      console.log("Error: "+err)
      alert('Sorry, invalid search')
    });
};
document.getElementById("second").onclick = () =>{
  let radios = document.getElementsByName("astro");
  for(let j =0;j<radios.length;j++){
    if(radios[j].checked){
      var whichAstro = radios[j].id;
      break;
    }
  }
  whichAstro.split(" ");
  let nameCheck = whichAstro[0][0] + whichAstro[1][0];
  fetch(`https://swapi.co/api/people/?search=${nameCheck}`)
    .then(res => res.json())
    .then(res => {
      document.getElementById("name").textContent= "Name: "+res.results[1].name;
      document.getElementById("height").textContent="Height(cm): "+res.results[1].height;
      document.getElementById("mass").textContent="Mass(kg): "+res.results[1].mass;
      document.getElementById("eye").textContent="Eye color: "+res.results[1].eye_color;
      document.getElementById("skin").textContent="Skin color: "+res.results[1].skin_color;
      document.getElementById("sex").textContent="Sex: "+res.results[1].gender;
      document.getElementById("birthday").textContent="Birthyear: "+res.results[1].birth_year;
    })
    .check(err => {
      console.log("Error: "+err)
      alert('Sorry, invalid search')
    });
};
