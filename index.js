const randomSearch = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

const button= document.getElementById('randombutton')
const img =document.getElementById('image')

fetch(ingredients)
.then(res => res.json())
.then(data => console.log(data))

fetch (randomSearch)
.then(res => res.json())
.then(data => console.log(data))

// my click button function
const random= document.addEventListener('click', handleClick)
 function handleClick(button){
 }
 //give me a random cocktail
function randomCocktail() {
    
}








// const details= document.addEventListener('submit', handleSubmit)

// function handleSubmit(e){
// e.preventDefault()
// }


// //give me ingredients 
// function cocktailIngredients(){

// }

//preventDefault must be in the handle submit 