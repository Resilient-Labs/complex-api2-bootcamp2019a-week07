document.querySelector('button').addEventListener('click',getData)
let click=0
function getData(){

  if (click<1){
  let country=document.querySelector('.place').value
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res=>res.json())
    .then(data=>{
      let topic=document.querySelector('.topix').value
      let alphaCode=data[0].alpha2Code
      console.log(alphaCode)
      fetch(`http://api.mediastack.com/v1/news?access_key=febe5a9111aadca9e68765aa50b9cbbd&keywords=${topic}&countries=${alphaCode}`)
        .then(res=>res.json())
        .then(joe=>{
          joe.data.forEach((item, i) =>{
            if(item.author == null){
              return false
            }

            console.log(item.image)
            const li = document.createElement('li')
            const ol = document.querySelector('.list')
            const pic=document.createElement('img')
            pic.src=item.image
            console.log(item)
            li.appendChild(pic)
            let title=item.title
            // down.innerHTML="Image Elemet Added."
            let content =document.createTextNode(`${item.title} : ${item.description}`)
            li.appendChild(content)
            ol.appendChild(li)
            // console.log(joe.data[i])
            // document.querySelector('p').innerText=joe.data[i].author
            // currently innertext not working
            // li.innerHtml=li.innerHtml + joe.data[i].author
            // ol.appendChild(li)
          });

        })
    })
    .catch(err=>{
      console.log("error" + err)
    })
}else{
  console.log('joe')
}
click=click+1
}
