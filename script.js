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
        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.image;
        recipeImage.addEventListener("click", () => displaySelectedRecipe(recipe));
        recipeList.appendChild(recipeImage);
    });
}

function displaySelectedRecipe(recipe) {
    const selectedArea = document.getElementById("selected-recipe");
    selectedArea.innerHTML = "";
    const recipeId = recipe.id;
    const recipeTitle = document.createElement("h3");
    const recipeImage = document.createElement("img");
    const instructionBtn = document.createElement("button");
    recipeImage.src = recipe.image;
    recipeTitle.textContent = recipe.title;
    instructionBtn.textContent = "Show Instructions";
    instructionBtn.id = "instruction-btn"
    selectedArea.appendChild(recipeTitle);
    selectedArea.appendChild(recipeImage);
    selectedArea.appendChild(instructionBtn);
    listenInstructionBtn(recipeId);
}

function getInstructions(id) {
    const baseUrl = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?query=&apiKey=${apiKey}`;
    fetch(baseUrl)
        .then(res => res.json())
        .then(instructionData => displayInstructions(instructionData))
}

function displayInstructions(instructionData) {
    console.log(instructionData[0].steps);
    const instructionSection = document.getElementById("selected-recipe-instructions");
    instructionSection.innerHTML = "";
    instructionData[0].steps.forEach(step => {
        let instructionMsg = document.createElement("li")
        instructionMsg.textContent = `${step.number}. ${step.step}`
        instructionSection.appendChild(instructionMsg)
    });
}

function listenInstructionBtn(id) {
    const button = document.getElementById("instruction-btn");
    button.addEventListener("click", () => {
        getInstructions(id)
        const instructions = document.getElementById("selected-recipe-instructions");
        if (instructions.style.display === "block") {
            instructions.style.display = "none";
            button.textContent = "Show Instructions"
        } else {
            instructions.style.display = "block";
            button.textContent = "Hide Instructions"
        }
    });
}

// function getSelectedRecipe(e) {
//     e.preventDefault();
//     const dayInput = document.getElementById("day").value;
//     const timeInput = document.getElementById("time").value;
// }

listenSubmit();