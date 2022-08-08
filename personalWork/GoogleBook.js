

function generateBook(book){
  const article= document.createElement(`article`)
  article.innerHTML = ` 

<section id="main">
          <h1>Title: ${book.volumeInfo.title}</h1>
          <p></p>
          <article>
      <img src=${book.volumeInfo.imageLinks.thumbnail} alt="book1" id="book1">
      </article>
      

<footer>
  <p>Author:${book.volumeInfo.authors}/p>
  <p>Author:${book.volumeInfo.description}/p>
</footer>
</section>
  `;
  return article;

}


async function init(searchText) {
  try {
    const resultsElem = document.getElementById(`results`);
    const bookResp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchText
    )}&maxResults=15`);
    const books = await bookResp.json();
    resultsElem.innerHTML='';
    books.items.forEach((element) => {
      resultsElem.appendChild(generateBook(element));
    });
    console.log(books);
  } catch (err){
    console.log(`Error,`, err);
  }
finally{
  console.log(`Demo finished`);
}
}
function handleSubmit(event) {
  event.preventDefault();
  const searchValue = document.getElementById("search").value;
  init(searchValue);
}