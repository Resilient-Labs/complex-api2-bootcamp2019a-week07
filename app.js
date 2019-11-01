let yes = document.getElementById("yes")
let no = document.getElementById("no")

yes.addEventListener("click", ()=>{
  fetch("https://yesno.wtf/api?ref=apilist.fun")
    .then(res => res.json())
    .then(response =>{
      console.log(response.answer)
      if(response.answer === "yes"){
        fetch("https://aws.random.cat/meow?ref=apilist.fun")
          .then(res => res.json())
          .then(response => {
            console.log(response)
            document.querySelector("img").src = response.file
            document.getElementById("no").textContent = ""
          })
      }else if(response.answer === "no"){
        document.getElementById("no").textContent = "Feel better and come back for a pus later"
      }
    })
})
