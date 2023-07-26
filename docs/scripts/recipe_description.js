const popupRecipeDescription = async (recipeID, recipeName, apiKey) => {
  // Get dom elements
    const recipeModal = document.querySelector("#recipe-modal")

  // Get info about the recipe
    const recipeInfo = await window.recipe_info.getRecipeInfo(recipeID, recipeName, apiKey)

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
        // Start ordered list
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `<ol>`)
        // Put in the ingredients in the ordered list
          recipeInfo.ingredients.forEach(ingredient => {
            recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
              <li>${ingredient}</li>
            `)
          })
        // End the ordered list
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `</ol>`)
      }
    // Instruction Description
      if(recipeModal.htmlInstructionDescription !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>${recipeModal.htmlInstructionDescription}</p>
        `)
      }
    // Ready in # minutes
      if(recipeModal.readyInMinutes !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>Ready in ${recipeModal.readyInMinutes} minutes.</p>
        `)
      }
    // Serving Size
      if(recipeModal.servingSize !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p>Number of servings: ${recipeModal.servingSize}</p>
        `)
      }
    // Instructions
      if(recipeModal.instructions.length !== 0){
        // Add title instructions
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
            <h2>Instructions:</h2>
          `)
        // Start ordered list
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `<ol>`)
        // Put in the ingredients in the ordered list
          recipeInfo.instructions.forEach(instruction => {
            recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
              <li>${instruction}</li>
            `)
          })
        // End the ordered list
          recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `</ol>`)
      }

  // Show modal
    recipeModal.style.visibility = "visible"
}

// Exporting
window.recipe_description = {
  recipeDescriptionInit
}
