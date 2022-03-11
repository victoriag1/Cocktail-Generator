const cocktailSearch = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

fetch (cocktailSearch)
.then(res => res.json())
.then(data => console.log(data))

fetch(ingredients)
.then(res => res.json())
.then(data => console.log(data))

// //getting elements
// document.getElementById() 
// document.getElementById()

// // events 
// const random= document.addEventListener('click', handleClick)
// const details= document.addEventListener('submit', handleSubmit)

// function handleClick(){

// }

// function handleSubmit(e){
// e.preventDefault()
// }
// // give me a random cocktail
// function randomCocktail() {

// }

// //give me ingredients 
// function cocktailIngredients(){

// }




//preventDefault must be in the handle submit 