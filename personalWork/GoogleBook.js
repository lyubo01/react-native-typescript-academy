function generateBook(book){
  const resultElem = document.getElementById('results');
  const article= document.createElement(`article`);
  console.log(article);
  article.innerHTML = ` 

<section id="main">
          <h1>Title: ${book.volumeInfo.title}</h1>
          <p></p>
          <article>
      <img src=${book.volumeInfo.imageLinks.thumbnail} alt="book1" id="book1">
      </article>
      

<footer>
  <h2>Author:${book.volumeInfo.authors}</h2>
  <p><h3>Description:</h3>${book.volumeInfo.description}/p>
</footer>
</section>
  `;
  return article;
}
async function init(searchText) {
  try {
    const resultElem = document.getElementById(`results`);
    const bookResp = await fetch
      (`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent
      (searchText)}&maxResults=15`
      );
    const books = await bookResp.json();
    //resultElem.innerHTML='';
    books.items.forEach(element => {
      resultElem.appendChild(generateBook(element));
    });
    console.log(books);
    

    
  } catch (err){console.log(`Error,`, err);}
finally{
  console.log(`Demo finished`);
}
}
function handleSubmit(event){
  event.preventDefault();
  const searchValue = document.getElementById("search").value ;
  init(searchValue);
  }
  