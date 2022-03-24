const randomSearch = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const cocktailAPI= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const randomImage=document.getElementById('randomImage')
const randomButton= document.getElementById('randomButton')

const cocktailSearch=document.getElementById('cocktailSearch')
const cocktailButton=document.getElementById('cocktailButton')
const cocktailName =document.getElementById('cocktailName')
const instructions=document.getElementById('instructions')
//const searchBar=document.getElementsByClassName('search-bar')
//const ingredients=document.getElementById('ingredients')

//dom content loaded
document.addEventListener('DOMContentLoaded', appendIt)

//random button section
function appendIt(){
    randomButton.addEventListener('click', getRandomCocktail)
    cocktailSearch.addEventListener('submit', searchDetails)
} 

function getRandomCocktail(){
fetch(randomSearch)
.then(res => res.json())
.then(data => randomCocktail(data))
}

function randomCocktail(cocktail) {
    //console.log(cocktail.drinks[0])
    randomImage.src =cocktail.drinks[0].strDrinkThumb
    cocktailName.innerText=cocktail.drinks[0].strDrink
    instructions.textContent=cocktail.drinks[0].strInstructions
}
// search section
function searchCocktail(cocktailNames){
fetch(cocktailAPI + cocktailNames.trim().toLowerCase())
.then(res => res.json())
.then(data => displaySearch(data.drinks[0]))
}

function searchDetails(e){
    e.preventDefault()
    let drinks = cocktailSearch.children[0].value
    searchCocktail(drinks)
} 

function displaySearch(cocktail){
    cocktailSearch.reset()
    cocktailName.innerText=cocktail.strDrink
    instructions.textContent=cocktail.strInstructions
    randomImage.src =cocktail.strDrinkThumb
}

