const getRecipeInfo = async (recipeID, apiKey) => {
  return new Promise((resolve, reject) => {
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

      recipe.name = data.title
      data.extendedIngredients.forEach(ingredient => {
        recipe.ingredients.push(`${ingredient.original}`)
      })
      recipe.readyInMinutes = data.readyInMinutes
      recipe.servingSize = data.servings
      recipe.image = data.image
      recipe.htmlDescription = data.summary
      recipe.htmlInstructionDescription = data.instructions
      data.analyzedInstructions[0].steps.forEach((instruction, index) => {
        recipe.instructions.push(`${index + 1}. ${instruction.step}`)
      })

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
