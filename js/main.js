//Worked with Garner Gang to complete - Asianna, Julie, Brian, Ziya, Dash, Wade, Tanecia

document.querySelector('button').addEventListener('click',searchWorld)

function searchWorld(){
  let country = document.querySelector('.country').value
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res=>res.json())
    .then(data=>{
      let topic=document.querySelector('.topic').value
      let alphaCode=data[0].alpha2Code
      console.log(alphaCode)
      fetch(`http://api.mediastack.com/v1/news?access_key=febe5a9111aadca9e68765aa50b9cbbd&keywords=${topic}&countries=${alphaCode}`)
        .then(res=>res.json())
        .then(main=>{
          // const ol = document.querySelector('ol')
          main.data.forEach((item, i) =>{
            if(item.author == null){
              return false
            }
            console.log(item)
            // document.querySelector('.mainArea').innerText = item
            let ul = document.querySelector('.list')
            let li = document.createElement('li')
            let content = document.createTextNode(`${item.author} : ${item.title}`)
            li.appendChild(content)
            ul.appendChild(li)
          });
        })
    })
    .catch(err=>{
      console.log("error" + err)
    })
}



  // let facility = item.title
  // let table = document.getElementById('myTable')
  // let newRow = table.insertRow()
  // let newCell = newRow.insertCell()
  // let newFacility = document.createTextNode(facility)
  // newCell.appendChild(newFacility)

  