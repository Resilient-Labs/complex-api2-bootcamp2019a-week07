let button = document.querySelector('#button')
let buttonReview = document.querySelector('#button')
let form = document.querySelector('.form')
let title = document.querySelector('#title')
let author = document.querySelector('#author')

const bookApi = () =>{
  let userAuthor = author.value; // vars for user input
  let userTitle = title.value;
  fetch(`http://openlibrary.org/search.json?title=${userTitle}&author=${userAuthor}`)
  .then( res => res.json()) //parse json data 
  .then(data => {
    console.log("openLibrary api", data.docs[0])
    let isbn = data.docs[0].isbn;
    console.log("isbn:",isbn)
    fetch(`https://idreambooks.com/api/books/reviews.json?q=${isbn}&key=71a6da4aabaeb74d7e1ea1087ed441f152eacbe0`) // info from isbn from first fetch now used to search for 2nd fetch
      .then( res => res.json())
      .then(data => {
        console.log("idreambooks",data)
        let bookAuthor = data.book.author; //declare var of data tree from 2nd fetch call
        let bookTitle = data.book.title;
        let genre = data.book.genre;
        let snippet = data.book.critic_reviews[0].snippet; //selects the first index of the critic reviews array and snippet
        let reviewLink = data.book.critic_reviews[0].review_link;
        console.log("snippet",snippet)
        console.log("review",reviewLink) 
        document.querySelector('.title').textContent = bookTitle; // displays var into the selected html tag
        document.querySelector('.author').textContent = bookAuthor;
        document.querySelector('.genre').textContent = genre;
        document.querySelector('#snippet').textContent = snippet;
        document.querySelector('.containerReview').classList.remove('hidden'); 
        //remove class to reveal review "button"
        document.querySelector('#reviewLink').href = reviewLink;
      }) //target href in a tag to put review urls
    });
}


// button.addEventListener('click', review());
button.addEventListener('click', bookApi); //btn pressed function is called
form.addEventListener("submit", (event) => {
  event.preventDefault()
})

