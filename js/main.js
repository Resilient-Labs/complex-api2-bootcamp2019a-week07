const listNews = document.querySelector('#newsList')

let result = document.querySelector('button').addEventListener('click', () => {
  let city = document.querySelector('input').value

  fetch(`https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=${city}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      const article = response[0]

      let key = "KYag1g9mXizeShYAMOq7wcA5AeAaIGZN"
      fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article}&api-key=${key}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
          let list = createLink(response)
          replaceChildren(listNews, list)
          document.querySelector('input').value = ""
          console.log(response.response.docs[0].web_url)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });

})

function createLink(response) {
  let list = document.createElement('li')
  let a = document.createElement('a')
  list.appendChild(a)
  console.log(response.response.docs[0].abstract)
  a.innerHTML = response.response.docs[0].abstract
  a.href = response.response.docs[0].web_url
  return list
}

function replaceChildren(list, child) {
  list.innerHTML = ""
  list.appendChild(child)
}
