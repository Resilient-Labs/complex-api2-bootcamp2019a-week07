let button = document.querySelector('#button')
let buttonReview = document.querySelector('#button')
let form = document.querySelector('.form')
let input = document.querySelector('#input')
let author = document.querySelector('#author')
const bookApi = () =>{
  let userAuthor = author.value;
  let userTitle = input.value;
  fetch(`http://openlibrary.org/search.json?title=${userTitle}&author=${userAuthor}`)
  .then( res => res.json())
  .then(data => {
    console.log("openLibrary api", data.docs[0])
    let isbn = data.docs[0].isbn;
    console.log("isbn:",isbn)
    fetch(`https://idreambooks.com/api/books/reviews.json?q=${isbn}&key=71a6da4aabaeb74d7e1ea1087ed441f152eacbe0`)
      .then( res => res.json())
      .then(data => {
        console.log("idreambooks",data)
        let snippet = data.book.critic_reviews[0].snippet;
        let reviewLink = data.book.critic_reviews[0].review_link;
        console.log("snippet",snippet)
        console.log("review",reviewLink)
        document.querySelector('#snippet').textContent = snippet;
        document.querySelector('#reviewLink').href = reviewLink;
        document.querySelector('#reviewLink').classList.remove("hidden");
        // document.querySelector('#urlButton').textContent = reviewLink;
      })
    });
}
// button.addEventListener('click', review());
button.addEventListener('click', bookApi);
form.addEventListener("submit", (event) => {
  event.preventDefault()
})
