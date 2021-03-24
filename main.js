// document.querySelector('button').addEventListener('click', run);
let select = document.getElementsByTagName('button');

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('click', () => {
    console.log("do the fetch for ", select[i].id);

    let url = `https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/today/${select[i].id}`

    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        let horoscope = document.querySelector('.horscope').innerHTML = data.horoscope;
        // console.log(data.slip.id)
        let urlAdvice = `https://api.adviceslip.com/advice`
        console.log(urlAdvice);

        fetch(urlAdvice)
          .then(res => res.json())
          .then(adviceData => {
            console.log(adviceData);
            let advice = document.querySelector('.advice').innerHTML = adviceData.slip.advice;
          })
      })
  })

}

function run() {





}
