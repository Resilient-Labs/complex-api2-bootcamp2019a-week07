document.querySelector('button').addEventListener('click',getData)
function getData(){
  document.querySelector('.list').innerHTML = ''
  // resetting each press to display new news
  let country=document.querySelector('.place').value
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res=>res.json())
    .then(data=>{
      let topic=document.querySelector('.topix').value
      let alphaCode=data[0].alpha2Code
      // grabbing the 2 letter code from the inputted country and entering it in the second api for news api to get location of news
      fetch(`http://api.mediastack.com/v1/news?access_key=febe5a9111aadca9e68765aa50b9cbbd&keywords=${topic}&countries=${alphaCode}`)
        .then(res=>res.json())
        .then(joe=>{
          joe.data.forEach((item, i) =>{
            if(item.author == null){
              return false
            }
            const li = document.createElement('li')
            const ol = document.querySelector('.list')
            const pic=document.createElement('img')
            // creating a img and li to the dom
            let title=item.title
            let content =document.createTextNode(`${item.title} : ${item.description}`)
            pic.src=item.image
            li.appendChild(pic)
            li.appendChild(content)
            ol.appendChild(li)
            // appedning img and the content with title and description to the dom
          });
        })
    })
    .catch(err=>{
      console.log("error" + err)
    })
}
