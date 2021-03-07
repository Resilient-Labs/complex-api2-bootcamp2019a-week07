//this needs CSS and to return the data to the dom...nyt api code works however there arent reviews available for test cases
// //returns books

document.querySelector("button").addEventListener("click", getBooks)

function getBooks(){
  let title = document.querySelector("input").value
  let url = `http://openlibrary.org/search.json?title=${title}`


  fetch(url)
  .then(res => res.json())
  .then(data =>{
     console.log(data);
     let bookTitle = data.docs[0].title
     let bookAuthor = data.docs[0].author_name[0]
     let genre = data.docs[0].subject[0]
     let isbn = data.docs[0].isbn[0]
     let url2 = `https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${isbn}&api-key=KccAcyJw2VC81nKVCasPxaF8HBhk3igV`



     fetch(url2)
     .then(res => res.json())
     .then(data2 => {
     console.log(data2);

     })
     .catch(err => {
       console.log(`err ${err}`);

     })

  })
  .catch(err =>{
    console.log(`error ${err}`)
  })
}


// https://cors.bridged.cc/
