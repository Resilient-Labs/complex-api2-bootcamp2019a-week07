
document.querySelector("button").addEventListener("click", () => {

fetch(`https://api.otreeba.com/v1/strains`)
    .then(res => res.json())
    .then(response => {

        const word =  response.data[Math.floor(Math.random() * response.data.length)];
        let idNumber = word.name;
        const afCode = word.lineage.Afghanistan
        const coCode = word.lineage.Colombia
        const mxCode = word.lineage.Mexico
        const zaCode = word.lineage.South_Africa
        const inCode = word.lineage.India
        const brCode = word.lineage.Brazil

        document.getElementById("strain").innerHTML = word.name
        document.getElementById("genetics").innerHTML = "Genetic family:" + " " + word.genetics.names
        document.getElementById("breeder").innerHTML = "Breeder:" + " " + word.seedCompany.name
        document.getElementById("photo").src = word.image
        document.getElementById("country").innerHTML = "Country of origin:"
        document.getElementById("af").src= `https://www.countryflags.io/${afCode}/flat/64.png`
        document.getElementById("co").src= `https://www.countryflags.io/${coCode}/flat/64.png`
        document.getElementById("mx").src= `https://www.countryflags.io/${mxCode}/flat/64.png`
        document.getElementById("za").src= `https://www.countryflags.io/${zaCode}/flat/64.png`
        document.getElementById("in").src= `https://www.countryflags.io/${inCode}/flat/64.png`
        document.getElementById("br").src= `https://www.countryflags.io/${brCode}/flat/64.png`

      if(idNumber === "Dirty Cookies"){
       idNumber = "863";
    } if (idNumber === "Doctor Cookies"){
       idNumber = "1346";
    }if (idNumber === "Electric Mayhem"){
       idNumber = "2123"
    } if (idNumber === "My Friend Jack"){
       idNumber = "1084"
    } if (idNumber === "Sour Cat"){
       idNumber = "1247"
    } if (idNumber === "Red Lemon"){
       idNumber = "1704"
    } if (idNumber === "Acid Dough"){
       idNumber = "593"
    }if (idNumber === "OG Badazz"){
       idNumber = "1455"
    }if (idNumber === "Alice (Delicatessen)"){
       idNumber = "15"
    } if (idNumber === "Spicy Bitch"){
       idNumber = "1149"
    }

      fetch(`https://strainapi.evanbusse.com/6hV8El6/strains/data/desc/${idNumber}`)
      .then(res => res.json())
      .then(description => {

        document.getElementById("desc").innerHTML = description.desc

      })

      fetch(`https://strainapi.evanbusse.com/6hV8El6/strains/data/effects/${idNumber}`)
      .then(res => res.json())
      .then(effects => {

        document.getElementById("positive").innerHTML = "Positive Effects:" + " " + effects.positive[0] + ", " + effects.positive[1] + ", " + effects.positive[2] + ", " + effects.positive[3]
        document.getElementById("negative").innerHTML = "Negative Effects:" + " " + effects.negative[0] + ", " + effects.negative[1]
        document.getElementById("medical").innerHTML = "Medical Effects:" + " " + effects.medical[0] + ", " + effects.medical[1] + ", " + effects.medical[2] + ", " + effects.medical[3] + ", " + effects.medical[4]

      })

      fetch(`https://strainapi.evanbusse.com/6hV8El6/strains/data/flavors/${idNumber}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(flavors => {

        document.getElementById("flavors").innerHTML = "Flavors:" + " " + flavors[0] + ", " + flavors[1] + ", " + flavors[2]

      })

    .catch(err => {
        console.log(`error ${err}`)
    })
    })
  })
