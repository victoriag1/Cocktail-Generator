const randomSearch = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

const randomImage =document.getElementById('randomImage')
const randomButton= document.getElementById('randomButton')
const ingredientsButton= document.getElementById('ingredientsButton')
const ingredientsList=document.getElementById('ingredientsList')

//random button section
function appendIt(){
    randomButton.addEventListener('click', getRandomCocktail)
}
appendIt() //dom content loaded 

function getRandomCocktail(){
fetch(randomSearch)
.then(res => res.json())
.then(data => randomCocktail(data))
}

function randomCocktail(cocktail) {
    console.log(cocktail.drinks[0])
    randomImage.src =cocktail.drinks[0].strDrinkThumb
// const recipeDetailsButton= document.createElement('button')
//     recipeDetailsButton.addEventListener('click',() => getIngredients(cocktail.drinks[0]))
//     recipeDetailsButton.id= 'ingredientsButton'
//     recipeDetailsButton.innerText='Heres How To Make It!' 
//     recipeDetails.appendChild(recipeDetailsButton)
}
//inside html h2 and 
// ingredients section
// function getIngredients(cocktail){
//     console.log(cocktail.strAlcoholic)
// fetch (ingredients)
// .then(res => res.json())
// .then(data => console.log(data))
//}

// function appendIngredients(){
// ingredientsButton.addEventListener('submit', displayIngredients)
// }

// function displayIngredients(e){
//     e.preventDefault()  
// for (of ){
// }

// }

//append ingredients 
//form element to be worked on today 
