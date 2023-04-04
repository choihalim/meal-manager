// const requestURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
const requestURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

function listenSubmit() {
    const form = document.getElementById("search-form");
    form.addEventListener("submit", (e) => getRecipes(e));
}

function cleanResults() {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";
}

function getRecipes(e) {
    e.preventDefault();
    const searchInput = document.getElementById("search").value;
    const cuisineInput = document.getElementById("cuisine").value;
    const typeInput = document.getElementById("mealtype").value;
    let url = `${requestURL}${searchInput}&apiKey=${apiKey}`;
    if (cuisineInput != "" && typeInput == "") {
        url = `${requestURL}${searchInput}&cuisine=${cuisineInput}&apiKey=${apiKey}`;
    } else if (typeInput != "" && cuisineInput == "") {
        url = `${requestURL}${searchInput}&type=${typeInput}&apiKey=${apiKey}`;
    } else if (typeInput != "" && cuisineInput != "") {
        url = `${requestURL}${searchInput}&type=${typeInput}&cuisine=${cuisineInput}&apiKey=${apiKey}`;
    }
    console.log(searchInput);
    
    fetch(url)
        .then(res => res.json())
        .then(recipes => displayRecipes(recipes))
    e.target.reset();
}

function displayRecipes(recipes) {
    cleanResults();
    console.log(recipes.results);
    const recipeList = document.getElementById("recipe-list");

    recipes.results.forEach(recipe => {
        const recipeTitle = document.createElement("h3");
        const recipeImage = document.createElement("img");
        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        recipeList.appendChild(recipeTitle);
        recipeList.appendChild(recipeImage);
    });
}

// function getSelectedRecipe(e) {
//     e.preventDefault();
//     const dayInput = document.getElementById("day").value;
//     const timeInput = document.getElementById("time").value;
// }

listenSubmit();



//const typeInput = document.getElementById("mealtype").value;
//     let url = `${requestURL}${searchInput}&apiKey=${apiKey}`;
//     if (cuisineInput != "" && typeInput == "") {
//         url = `${requestURL}${searchInput}&cuisine=${cuisineInput}&apiKey=${apiKey}`;
//     } else if (typeInput != "" && cuisineInput == "") {
//         url = `${requestURL}${searchInput}&type=${typeInput}&apiKey=${apiKey}`;
//     } else if (typeInput != "" && cuisineInput != "") {
//         url = `${requestURL}${searchInput}&type=${typeInput}&cuisine=${cuisineInput}&apiKey=${apiKey}`;
//     }
//     console.log(searchInput);

//     fetch(url)
//         .then(res => res.json())
//         .then(recipes => displayRecipes(recipes))
//     e.target.reset();