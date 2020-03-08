
const clickthis = document.getElementById('click');
clickthis.addEventListener('click', () => {
  fetch(`https://www.random.org/quota/?format=plain`)
      .then(res => res.json())
      .then(response => {
       console.log(response)

       let number = response.toString().split('')
       let index = Math.floor(Math.random() * number.length);
        let slipId = number[index];
        console.log(number,slipId );
          console.log(slipId)
        fetch(`https://api.adviceslip.com/advice/${slipId}`)
            .then(res => res.json())
            .then(response2 => {
              console.log(response2)
              document.querySelector('span').innerHTML = slipId
              document.getElementById('advice').innerHTML = response2.slip.advice
            })
      })

})

//Math.floor(Math.random() * Math.floor(max));
    // .catch(err => {
    //     console.log(`error ${err}`)
    //     alert("sorry, there are no results for your search")
    // });
