window.getRandomCocktail = async () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(response => response.json())
  .then(data => data.drinks[0])
  .then(drink => 
    const cocktail = {
      name: "",
      image: "",
      ingredients: [],
      instructions: "",
    }
    cocktail.name = drink.strDrink
    cocktail.image = drink.strDrinkThumb


    cocktail.instructions = drink.strInstructions
  })
  .catch(error => console.log(error))
}
