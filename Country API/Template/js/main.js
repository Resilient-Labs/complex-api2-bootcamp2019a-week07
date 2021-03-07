// worked on JS with House Gardner

document.querySelector("button").addEventListener("click", getData);

function getData() {
  document.querySelector(".list").innerHTML = " ";
  let country = document.querySelector(".place").value;
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((res) => res.json())
    .then((data) => {
      let topic = document.querySelector(".toppic").value;
      let megaCode = data[0].alpha2Code;
      console.log(megaCode);
      fetch(
        `http://api.mediastack.com/v1/news?access_key=febe5a9111aadca9e68765aa50b9cbbd&keywords=${topic}&countries=${megaCode}`
      )
        .then((res) => res.json())
        .then((info) => {
          info.data.forEach((item, i) => {
            if (item.author == null) {
              return false;
            }

            console.log(item.image);
            const li = document.createElement("li");
            const ol = document.querySelector(".list");
            const pic = document.createElement("img");
            pic.src = item.image;
            console.log(item);
            li.appendChild(pic);
            let title = item.title;
            let content = document.createTextNode(
              `${item.title} : ${item.description}`
            );
            li.appendChild(content);
            ol.appendChild(li);
          });
        });
    })
    .catch((err) => {
      console.log("error" + err);
    });
}
