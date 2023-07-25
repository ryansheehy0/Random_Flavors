const getRecipeInfo = async (recipeID, apiKey) => {
  // Remove the "a" in front of the id
  return new Promise((resolve, reject) => {
    recipeID = recipeID.slice(1)
    fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const recipe = {
        name: "",
        ingredients: [],
        readyInMinutes: "",
        servingSize: "",
        image: "",
        htmlDescription: "",
        htmlInstructionDescription: "",
        instructions: [],
      }
      try{

      }catch{

      }

      try{recipe.name = data.title}catch(e){console.log(e)}
      try{data.extendedIngredients.forEach(ingredient => {
        recipe.ingredients.push(`${ingredient.original}`)
      })}catch(e){console.log(e)}
      try{recipe.readyInMinutes = data.readyInMinutes}catch(e){console.log(e)}
      try{recipe.servingSize = data.servings}catch(e){console.log(e)}
      try{recipe.image = data.image}catch(e){console.log(e)}
      try{recipe.htmlDescription = data.summary}catch(e){console.log(e)}
      try{recipe.htmlInstructionDescription = data.instructions}catch(e){console.log(e)}
      try{data.analyzedInstructions[0].steps.forEach((instruction, index) => {
        recipe.instructions.push(`${index + 1}. ${instruction.step}`)
      })}catch(e){console.log(e)}

      resolve(recipe)
    })
    .catch(error => {
        reject(error)
    })
  })
}

// Exporting
window.recipe_info = {
  getRecipeInfo
}
