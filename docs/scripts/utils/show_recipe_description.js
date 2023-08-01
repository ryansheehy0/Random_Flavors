window.showRecipeDescription = async (recipeid, recipeName, hideBackground) => {
  // Get dom elements
    const recipeModal = document.querySelector("#recipe-modal")
    const background = document.querySelector("#background")
    const bodyContainer = document.querySelector("#body-container")

  // Get info about the recipe
    const recipeInfo = await window.getRecipeInfo(recipeid, recipeName)

  // Populate the modal with the recipe info
    // Title and close icon
      recipeModal.innerHTML = `
        <i class="icon mdi mdi-close"></i>
        <h1 class="title text-3xl font-bold">${recipeName}</h1>
      `
    // Get the newly created icon
    const closeIcon = recipeModal.querySelector(".mdi-close")

    // Link
      if(recipeInfo.link !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <a href="${recipeInfo.link}" target="_blank">Source URL</a>
        `)
      }
    // Image
      if(recipeInfo.image !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <img class="relative left-[50%] transform translate-x-[-50%] rounded-[var(--radius)]" src="${recipeInfo.image}" alt="Recipe Image">
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
            <h2 class="text-2xl font-bold">Ingredients:</h2>
          `)
        // Put in the ingredients in the ordered list
          recipeInfo.ingredients.forEach(ingredient => {
            recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
              <li class="list-none">${ingredient}</li>
            `)
          })
      }
    // Instruction Description
      if(recipeInfo.htmlInstructionDescription !== ""){
        recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
          <p class="mt-[var(--space-inside)]">${recipeInfo.htmlInstructionDescription}</p>
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
            <h2 class="text-2xl font-bold">Instructions:</h2>
          `)
        // Put in the ingredients in the ordered list
          recipeInfo.instructions.forEach(instruction => {
            recipeModal.insertAdjacentHTML("beforeend" /* Last Child */, `
              <li class="list-none">${instruction}</li>
            `)
          })
      }

  // Blur the background
    background.style.visibility = "visible"

  // Prevent clicking on the background
    bodyContainer.style.pointerEvents = "none"

  // add event listener to the icon element
    closeIcon.addEventListener("click", () => {
      if(hideBackground){
        // Hide the background
          background.style.visibility = "hidden"
        // Allow clicking on the background
          bodyContainer.style.pointerEvents = "auto"
      }
      // Hide modal
        recipeModal.style.visibility = "hidden"
    })

  // Show modal
    recipeModal.style.visibility = "visible"
}
