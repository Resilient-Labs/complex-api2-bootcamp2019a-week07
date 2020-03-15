// It took me like a week to get a thesaurus API that worked. It ended up being one that I signed up for and had to wait a week to get a key for it. Nothing else was budging. Still some edge cases to work through but I'm happy with this product.


const apiKeyDic = "79e9e3f9-2ce9-43ec-86ae-072ca948a435" // Merriam Webster Dictionaruy API
const apiKeyThes = "5e8ff6cb6adaf9b0913d9e3e39cb277b" // MyBigThesaurus API
// const apiKeyBook = "AIzaSyDheT0Kpk2zu8sRIc2Z-GFJITjbmKs4OZA" // Google Books API Key
let word = document.getElementById("word")
let sendFetch = document.querySelector("button")
const synonym = "Synonyms:"
const antonym = "Antonyms:"

sendFetch.addEventListener('click', ()=>{
  fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.value}?key=${apiKeyDic}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        let actualWord = document.createElement('h2');
        actualWord.innerText = word.value;
        document.querySelector('#typeAndDef').appendChild(actualWord);

        console.log(response)
        response.forEach((object, i) => {
          let responseType = document.createElement('p');
          let responseDef = document.createElement('p');
          responseType.innerText = object.fl;
          responseDef.innerText = object.shortdef;
          document.querySelector('#typeAndDef').appendChild(responseType);
          document.querySelector('#typeAndDef').appendChild(responseDef);
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });



fetch(`https://words.bighugelabs.com/api/2/${apiKeyThes}/${word.value}/json`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response);

      let synHeading = document.createElement('h3');
      synHeading.innerText = synonym;
      document.querySelector('#synonyms').appendChild(synHeading);

      response.noun.syn.forEach((object, i) => {
        let synonyms = document.createElement('p');
        synonyms.innerText = response.noun.syn[i];
        document.querySelector('#synonyms').appendChild(synonyms);
      })

      response.verb.syn.forEach((object, i) => {
        let synonymsVerb = document.createElement('p');
        synonymsVerb.innerText = response.verb.syn[i];
        document.querySelector('#synonyms').appendChild(synonymsVerb);
      })

      // let antHeading = document.createElement('h3');
      // antHeading.innerText = antonym;
      // document.querySelector('#antonyms').appendChild(antHeading);
      //
      // response.noun.ant.forEach((object, i) => {
      //   let antonyms = document.createElement('p');
      //   antonyms.innerText = response.noun.ant[i];
      //   document.querySelector('#antonyms').appendChild(antonyms);
      // })
      //
      // response.verb.ant.forEach((object, i) => {
      //   let antonymsVerb = document.createElement('p');
      //   antonymsVerb.innerText = response.verb.ant[i];
      //   document.querySelector('#antonyms').appendChild(antonymsVerb);
      // })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
