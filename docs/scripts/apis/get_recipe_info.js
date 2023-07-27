window.getRecipeInfo = async (recipeID, recipeName, apiKey) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const recipe = {
        name: "",
        link: "",
        image: "",
        htmlDescription: "",
        ingredients: [],
        htmlInstructionDescription: "",
        readyInMinutes: "",
        servingSize: "",
        instructions: [],
      }
      recipe.name = recipeName
      try{data.link = data.sourceUrl}catch(e){console.log(e)}
      try{recipe.image = data.image}catch(e){console.log(e)}
      try{recipe.htmlDescription = data.summary}catch(e){console.log(e)}
      try{data.extendedIngredients.forEach(ingredient => {
        recipe.ingredients.push(`${ingredient.original}`)
      })}catch(e){console.log(e)}
      try{recipe.htmlInstructionDescription = data.instructions}catch(e){console.log(e)}
      try{recipe.readyInMinutes = data.readyInMinutes}catch(e){console.log(e)}
      try{recipe.servingSize = data.servings}catch(e){console.log(e)}
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
