//function that fetches the margarita
let input = document.getElementById('input')
document.getElementById("button").addEventListener('click', fetchDrinks)
function fetchDrinks() { 
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => {
      console.log(data.drinks)
      display(data.drinks)})
}
// Display margarita ingredients
function display(drinks) {
  console.log(drinks)
  drinks.forEach(drink => {
    if(drink.strDrink === input.value) {
      let ul = document.getElementById("drinkList")
      let string = "strIngredient"
      for(let i = 1; drink[string + i] != null; i++) {
        let li = document.createElement("li")
        li.innerText = `${drink[string + i]}`
        ul.appendChild(li)
      }
    }
  })
}

