

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


async function init() {
  try {
    const resultElem = document.getElementById(`results`);
    const bookResp = await fetch("book.json");
    const books = await bookResp.json();
    books.items.forEach(element => {
      resultElem.appendChild(generateBook(element));
    });
    console.log(books);
    

    
  } catch (err){console.log(`Error,`, err);}
finally{
  console.log(`Demo finished`);
}
}
init();