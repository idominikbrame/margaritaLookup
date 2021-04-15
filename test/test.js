const fetch = require("node-fetch")
var assert = require('assert');

describe('Fetch API', () => {
  it('should Return "Margarita"', async() => {
    let drink;
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((res) => res.json())
    .then(data => {
      drink = data.drinks[0].strDrink      
    })
    assert.equal(drink, "Margarita")
  })

  it('Should return the first ingredient', async() => {
    let drink;
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((res) => res.json())
    .then(data => {
      drink = data.drinks[0].strIngredient1      
    })
    assert.equal(drink, "Tequila")
  })

  it('Should return ID number', async() => {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552')
    .then((res) => res.json())
    .then(data => {
      id = data.ingredients[0].idIngredient 
    })
    assert.equal(id, 552)
  })

  it('should return an alcohol', async() => {
    let drink;
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((res) => res.json())
    .then(data => {
      drink = data.drinks[2].strAlcoholic     
    })
    assert.equal(drink, "Alcoholic")
  })
  

  it('should return cocktail glass', async() => {
    let drink;
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((res) => res.json())
    .then(data => {
      glass = data.drinks[0].strGlass      
    })
    assert.equal(glass, "Cocktail glass")
  }) 
})
