
// Search Button Listener
const searchButton = document.getElementById('search-button').addEventListener("click", function () {
    const searchText = document.getElementById('search-text').value;
    document.getElementById("books-list").innerHTML = "";
    // const ingredientDiv = document.getElementById('ingredient-div');
    // ingredientDiv.style.display = "none";
    const booksDiv = document.getElementById('books-list');
    booksDiv.style.display = "grid";
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    //const coverUrl = `https://covers.openlibrary.org/b/id/55410-M.jpg`
    // const url1 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showBookInfo(data.docs, data.numFound));
    // .then(data => console.log(data.docs.length));
});


// Show meal in the meal div
const showBookInfo = (books, noOfResult) => {

    const booksDiv = document.getElementById('books-list');
    const messageDiv = document.getElementById('message');
    // const div = document.createElement('div');
    // let booksInfo = "";


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

    books.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="book">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
                    <h6>Title: ${book.title}</h6>
                    <h6>FPY: ${book.first_publish_year}</h6>
                </div> 
        `
        booksDiv.appendChild(div);
    })
}

// THE END
