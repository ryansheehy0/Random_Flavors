window.showRecipeDescription = async (recipeID, recipeName, apiKey) => {
  // Get dom elements
    const recipeModal = document.querySelector("#recipe-modal")

  // Get info about the recipe
    const recipeInfo = await window.getRecipeInfo(recipeID, recipeName, apiKey)

  // Populate the modal with the recipe info
    // Title and close icon
      recipeModal.innerHTML = `
        <i class="icon mdi mdi-close"></i>
        <h1 class="title">${recipeName}</h1>
      `
    // Link
      if(recipeInfo.link !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <a href="${recipeInfo.link}" target="_blank">Source URL</a>
        `)
      }
    // Image
      if(recipeInfo.image !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <img src="${recipeInfo.image}" alt="Recipe Image">
        `)
      }
    // Description
      if(recipeInfo.htmlDescription !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>${recipeInfo.htmlDescription}</p>
        `)
      }
    // Ingredients
      if(recipeInfo.ingredients.length !== 0){
        // Add title ingredients
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
            <h2>Ingredients:</h2>
          `)
        // Put in the ingredients in the ordered list
          recipeInfo.ingredients.forEach(ingredient => {
            recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
              <li>${ingredient}</li>
            `)
          })
      }
    // Instruction Description
      if(recipeInfo.htmlInstructionDescription !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>${recipeInfo.htmlInstructionDescription}</p>
        `)
      }
    // Ready in # minutes
      if(recipeInfo.readyInMinutes !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>Ready in ${recipeInfo.readyInMinutes} minutes.</p>
        `)
      }
    // Serving Size
      if(recipeInfo.servingSize !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>Number of servings: ${recipeInfo.servingSize}</p>
        `)
      }
    // Instructions
      if(recipeInfo.instructions.length !== 0){
        // Add title instructions
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
            <h2>Instructions:</h2>
          `)
        // Put in the ingredients in the ordered list
          recipeInfo.instructions.forEach(instruction => {
            recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
              <li>${instruction}</li>
            `)
          })
      }

  // Show modal
    recipeModal.style.visibility = "visible"
}
