/*Exchnage rate
https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/USD/${currencyCode}
//Substitute `USD` with the code you want to use as a base currency//

API KEY = a8f95322b5c881555f672485
*/

//help from mentor mike//

document.querySelector("button").addEventListener("click",countrytoCurrency)

function countrytoCurrency(){
  const userInput = document.querySelector('input').value
  const url = `https://restcountries.eu/rest/v2/name/${userInput}`
// const variabe go inside the function//
console.log(url)
  fetch(url)
    .then(res => res.json()) //this is just the syntax//parse response as JSON//
    .then(data=>{
      console.log(data)
      document.querySelector('.currency').innerText = data[0].currencies[0].symbol
      document.querySelector('.currencyName').innerText = "Currency Name: " + data[0].currencies[0].name
      // document.querySelector('.flag').src = data[0].flag

      //Run this function exchangeRate with this value as the currencyCode//
      exchangeRate(data[0].currencies[0].code)
      /*by putting the data[0] etc..  as the parameter for the function exchangeRate
      and exchangeRate that is being called here, you can access the currency code from the function below .*/
    })
}
//almost like currencyCode = data[0].currencies[0].code, bcause we are calling the function, exchangeRate, ONCE  (in the other function above ). We are doing this to be able to access the data[0].currencies[0].code//
function exchangeRate(currencyCode){
  const url2 = `https://v6.exchangerate-api.com/v6/a8f95322b5c881555f672485/pair/USD/${currencyCode}`

  console.log(url2)
  fetch(url2)
    .then(res => res.json()) //this is just the syntax//parse response as JSON//
    .then(data=>{ //this data is different than the data above. I was just too lazy to call it data2 but i could name it whatever i want//
    console.log(data)
    document.querySelector('.resultValue').innerText = data.conversion_rate

    })

    .catch(err =>{
      alert(`error ${err}`)
    })
}
