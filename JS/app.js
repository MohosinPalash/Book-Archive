
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
        .then(data => showBookInfo(data.docs));
    // .then(data => console.log(data.docs));
});


// Show meal in the meal div
const showBookInfo = books => {

    const booksDiv = document.getElementById('books-list');

    // const div = document.createElement('div');
    // let booksInfo = "";

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







    // const url1 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    // fetch(url1)
    //     .then(res => res.json())
    //     .then(data => {
    //         booksInfo += `
    //             <div class="each-meal" onClick="ingredients(${id})">
    //                 <img src="${data.meals[0].strMealThumb}">
    //                 <p>${data.meals[0].strMeal}</p> 
    //                 </div>
    //             `
    //         div.innerHTML = booksInfo;
    //         booksDiv.appendChild(div);
    //     });
}

// Show ingredients in the ingredient Div
const ingredients = id => {
    document.getElementById("ingredient-div").innerHTML = "";

    const ingredientDiv = document.getElementById('ingredient-div');
    const div1 = document.createElement('div');
    let ingredientInfo = "";

    const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url2)
        .then(res => res.json())
        .then(data => {

            ingredientInfo += `
            <div class="ingredient-meal">
                <img src="${data.meals[0].strMealThumb}">
                <h1 style="text-align: center">${data.meals[0].strMeal}</h1>
                <p style="margin-left: 10px"><strong>Ingredients:</strong></p>
                <ul>
                    <li>${data.meals[0].strIngredient1}</li>
                    <li>${data.meals[0].strIngredient2}</li>
                    <li>${data.meals[0].strIngredient3}</li>
                    <li>${data.meals[0].strIngredient4}</li>
                    <li>${data.meals[0].strIngredient5}</li>
                    <li>${data.meals[0].strIngredient6}</li>
                    <li>${data.meals[0].strIngredient7}</li>
                </ul>
            </div>
            `
            div1.innerHTML = ingredientInfo;
            ingredientDiv.appendChild(div1);

        });

    ingredientDiv.style.display = "grid";
    const booksDiv = document.getElementById('books-div');
    booksDiv.style.display = "none";
}

// THE END
