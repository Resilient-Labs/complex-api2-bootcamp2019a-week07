document.querySelector('button').addEventListener('click',getData)

function getData(){
  document.querySelector('.list').innerHTML = ''
  let country=document.querySelector('.place').value
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res=>res.json())
    .then(data=>{
      let topic=document.querySelector('.topix').value
      let alphaCode=data[0].alpha2Code
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
            pic.src=item.image
            li.appendChild(pic)
            let title=item.title
            let content =document.createTextNode(`${item.title} : ${item.description}`)
            li.appendChild(content)
            ol.appendChild(li)
          });
        })
    })
    .catch(err=>{
      console.log("error" + err)
    })
}
