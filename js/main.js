// targets button
let search = document.getElementById("search")

//adds event listener to the button
search.addEventListener("click", function(){

//user input
let userInput = document.getElementById("text").value

    console.log("u=input: ", userInput)

//adds user input to the dictionary api for the fetch
fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=aff66ce9-c624-40db-800b-fd21d87c679e`)
        .then(res => res.json() )
        .then(response => {
            console.log(response);
            console.log(response[0].shortdef[0]);

            //grabs the placement of the section for display where def goes
           let place = document.getElementById("display")

            // creating new HTML elements
           let word = document.createElement("h1")

           let paragarph = document.createElement("p")

           let space = document.createElement("br")

           let list = document.createElement("ul")

           let bullet = document.createElement("li")

           let bullet2 = document.createElement("li")

           let bullet3 = document.createElement("li")

            // puts content into html elements
           word.append(response[0].meta.id)

           paragarph.append(response[0].shortdef[0])

           paragarph.append(" ", response[0].shortdef[1])

           paragarph.append(space, response[0].shortdef[2])

           bullet.append(response[0].meta.stems[0])

           bullet2.append(response[0].meta.stems[1])

           bullet3.append(response[0].meta.stems[2])

           //send html elemnets with info to the dom
           list.append(bullet)

           list.append(bullet2)

           list.append(bullet3)

           place.append(word)

           place.append(paragarph)

           place.append(list)

            // passes in the response title id from the dictionary api
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${response[0].meta.id}&client_id=ead2d74eafdb1adabecbd11f3161400ccc91abdb83aa92351b59cdb279769fec`)
            .then(res => res.json() )
            .then(response =>{
                console.log(response);

                //targets gallery where images are dispalyed
                let galleryDisplay = document.getElementById("gallery")

                console.log("result", response.results.length)

                for( let i = 0; i < response.results.length; i++){

                    //loop to create html elements, 
                    let section = document.createElement("section")

                    let image = document.createElement("img")

                    //adding atribues to thoes elements
                    image.setAttribute("class", "size")

                    section.setAttribute("class", "grid-item")

                    //adding the souce to the image elemet
                    console.log(response.results[i].urls.full)

                    image.src = response.results[i].urls.full

                    //adding the img to the section
                    section.append(image)

                    // adding the section with the img to the dom
                    galleryDisplay.append(section)

                    
                }
            })


        })

    })