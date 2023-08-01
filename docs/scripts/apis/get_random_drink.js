window.getRandomDrink = async () => {
  return new Promise((resolve, reject) => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => data.drinks[0])
    .then(drinkData => {
      const drink = {
        name: "",
        image: "",
        ingredients: [],
        instructions: "",
      }
      try{
        drink.name = drinkData.strDrink
        drink.image = drinkData.strDrinkThumb

        for(let i=1; i < 16; i++){
          const ingredientNum = "strIngredient" + i
          const measureNum = "strMeasure" + i
          const measurement = drinkData[measureNum]
          const ingredient = drinkData[ingredientNum]
          if(measurement === null || ingredient === null){
            continue
          }
          drink.ingredients.push( measurement + ": " + ingredient )
        }

        drink.instructions = drinkData.strInstructions

        resolve(drink)
      }catch(error){
        console.log(error)
        reject(error)
      }
    })
    .catch(error => {console.log(error); reject(error);})
  })
}
