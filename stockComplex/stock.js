const submit = document.querySelector("#submit")

let realKey = 'CYEJPFNOWO0P0DCM'

let histKey = "JXLIHhpiOK0tRkKjstPh9VSc2BS175rq8yp7CxZlzQeB6uizEZc928FFhSPa"

var key_41sc = config.KEY_41sc
var key_42sc = config.KEY_42sc

submit.addEventListener('click', function(){
  const ticker = document.querySelector("#ticker").value

  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${key_41sc}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
        //place object inside html
        let realTime = document.querySelector('#dailyResults')
        let metaD = response['Meta Data']
         realTime.innerHTML = ` Ticker: ${metaD['2. Symbol']} Last Refreshed: ${metaD['3. Last Refreshed']} Time Zone: ${metaD['5. Time Zone']}`
         //json keys are either a string or a number cannot be an array or an object -this how to target json objects
         let todayDate = new Date(Date.now() - (1000*60*60*24)) // + (1000*60*60*24)) // I think they have not added new data yet the market opens at a certain time time
         let currentDate =`${todayDate.getFullYear()}-${todayDate.getMonth()+1}-${todayDate.getDate()}`
         let realDate = response['Time Series (Daily)'][currentDate]
         let newSection = document.createElement('section')
         newSection.innerHTML = `${realDate['1. open']} ${realDate['2. high']} ${realDate['3. low']} ${realDate['4. close']}`
         realTime.appendChild(newSection)

         fetch(`https://api.worldtradingdata.com/api/v1/history?symbol=${metaD['2. Symbol']}&sort=newest&api_token=${key_42sc}`)
             .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
             .then(response => {
               console.log(response)
               for (let i = 1; i <=4; i ++){
                 let pastDate = new Date(Date.now() - (1000*60*60*24)*(7*i));
                 console.log(pastDate);

                 let previousDate = `${pastDate.getFullYear()}-${fixDates(pastDate.getMonth()+1)}-${fixDates(pastDate.getDate())}`;

                 console.log(previousDate)

                 let pDate = response['history'][previousDate]
                 let newSectionP = document.createElement('section')
                 newSectionP.innerHTML = `${previousDate} - ${pDate['close']}`

                 let past = document.querySelector('#histResults')

                 past.appendChild(newSectionP)
               }


               })
             .catch(err => {
                 console.log(`error ${err}`)
                 alert("sorry, there are no results for your search")
             });


        })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})

function fixDates(num){
  let numStr = '';
  if (num < 10) {
    numStr = `0${num}`;
  } else {
    numStr = `${num}`;
  }
  return numStr
}
