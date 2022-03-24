const randomSearch = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const cocktailAPI= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const randomImage=document.getElementById('randomImage')
const randomButton= document.getElementById('randomButton')

const cocktailSearch=document.getElementById('cocktailSearch')
const cocktailButton=document.getElementById('cocktailButton')
const cocktailName =document.getElementById('cocktailName')
const instructions=document.getElementById('instructions')
const ingredients=document.getElementById('ingredients')

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
    cocktailName.innerText=cocktail.strDrink
    instructions.textContent=cocktail.strInstructions
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
    displaySearch.coc=''
    cocktailName.innerText=cocktail.strDrink
    instructions.textContent=cocktail.strInstructions
    randomImage.src =cocktail.strDrinkThumb
    //for(let )

    // let drinks = data["drinks"][0];
    // for (let i = 0; i < 16; i++) {
    //     let item = document.createElement('li');
    //     item.textContent = drinks[`strIngredient${i}`];
    // }

}
//console.log(displaySearch)
//for loop
// list html for info 
//cocktailSearch.src=cocktail.drink  
// for(let i = 0; i < 16; i++){
// console.log(i)
// const name= document.createElement
// cocktail.strDrink
// const image= cocktail.strDrinkThumb