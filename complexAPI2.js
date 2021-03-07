const quoteGenerator = document.getElementById("button").addEventListener("click", () => {
    let generatedAdvice;
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then((response) => {
        generatedAdvice = response.slip.advice; 
        document.getElementById("advice").innerHTML = generatedAdvice;

        fetch(
          `https://api.funtranslations.com/translate/ferb-latin.json?text=${generatedAdvice}`
        )
          .then((res) => res.json())
          .then((ferbL) => {
            console.log(ferbL);
            document.getElementById(
              "translation"
            ).innerHTML = `In Ferb-Latin : ${ferbL["contents"]["translated"]}`; // displays translation in innerHTML 
          })
          .catch((err) => {
            console.log(`error ${err}`);
            // alert("Sorry, there are no results for your search");
          });
      });
  });
