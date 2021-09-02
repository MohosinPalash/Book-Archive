// Search Button Listener
const searchButton = document.getElementById('search-button').addEventListener("click", function () {
    const searchText = document.getElementById('search-text').value;
    document.getElementById("books-list").innerHTML = "";

    const booksDiv = document.getElementById('books-list');
    booksDiv.style.display = "grid";

    //Fetching OpenLibrary API
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showBookInfo(data.docs, data.numFound));
});


// Show Book information Function
const showBookInfo = (books, noOfResult) => {

    const booksDiv = document.getElementById('books-list');
    const messageDiv = document.getElementById('message');

    //No result OR No of result message
    if (books.length === 0) {
        messageDiv.textContent = "";
        const p = document.createElement('p');
        p.innerText = `Upps! No Result Found!`
        messageDiv.appendChild(p);
    } else {
        messageDiv.textContent = "";
        const p = document.createElement('p');
        p.innerText = `${noOfResult} results are found.`
        messageDiv.appendChild(p);
    }

    //HTML Code generation
    books.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="book">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
                    <p class="mt-3"><strong>Title: </strong>${book.title}</p>
                    <p><strong>First Publish Year: </strong>${book.first_publish_year}</p>
                    <p><strong>Authors: </strong>${book.author_name}</p>
                    <p><strong>Publishers: </strong>${book.publisher}</p>
                </div> 
        `
        booksDiv.appendChild(div);
    })
}