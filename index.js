const randomSearch = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

const randomImage =document.getElementById('randomImage')
const randomButton= document.getElementById('randomButton')
const ingredientsButton= document.getElementById('ingredientsButton')
const ingredientsList=document.getElementById('ingredientsList')

//random button section
function appendIt(){
    randomButton.addEventListener('click', getRandomCocktail)
    randomButton.append()
}
appendIt()

function getRandomCocktail(){
fetch(randomSearch)
.then(res => res.json())
.then(data => randomCocktail(data))

function randomCocktail(cocktail) {
    console.log(cocktail.drinks[0])
    randomImage.src =cocktail.drinks[0].strDrinkThumb
    randomImage.append()
    }
}
getRandomCocktail()

// ingredients section
function getIngredients(){
fetch (ingredients)
.then(res => res.json())
.then(data => console.log(data))
}

function appendIngredients(){
ingredientsButton.addEventListener('submit', displayIngredients)
}

function displayIngredients(e){
    e.preventDefault()  
for (of ){
}

}



getIngredients()
appendIngredients()

