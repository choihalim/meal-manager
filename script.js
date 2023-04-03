const requestURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";

function listenSubmit() {
    const form = document.getElementById("search-form");
    form.addEventListener("submit", (e) => getData(e));
}

function getData(e) {
    e.preventDefault();
    const input = document.getElementById("search").value;
    console.log(input);
    const url = requestURL + input + "&apiKey=" + apiKey;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

listenSubmit();