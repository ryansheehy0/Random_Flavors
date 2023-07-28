window.randomRecipeInit = () => {
  // Get the dom elements
    const randomRecipesBtn = document.querySelector("#random-recipes")
    const randomRecipesModal = document.querySelector("#random-recipes-modal")
    const randomRecipesModalCloseIcon = randomRecipesModal.querySelector(".mdi-close")
    const randomRecipesContainer = randomRecipesModal.querySelector("#random-recipes-container")
    const background = document.querySelector("#background")
    const bodyContainer = document.querySelector("#body-container")
  // When Random Recipes Button is pressed
  randomRecipesBtn.addEventListener("click", () => {
    // Variables
      const numOfRandomRecipes = 2
      let tempFavorites = [...window.favorites] // Pass by value instead of by reference
      let randomRecipes = []

    for(let i = 0; (i < numOfRandomRecipes) && (tempFavorites.length > 0); i++){
      // Get a random recipe from the temp favorites
        const randomIndex = Math.floor(Math.random() * tempFavorites.length)
      // Add random recipe to randomeRecipes
        randomRecipes.push(tempFavorites[randomIndex])
      // Remove that recipe from tempFavorites
        tempFavorites.splice(randomIndex, 1)
    }

    // Add the randomly chosen recipes to random recipes container
    randomRecipes.forEach(recipe => {
      randomRecipesContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <h3 data-recipeid="${recipe.id}">
          ${recipe.name}
        </h3>
      `)
    })

    // Blur the background
      background.style.visibility = "visible"

    // Prevent clicking on the background
      bodyContainer.style.pointerEvents = "none"

    // Show the modal
      randomRecipesModal.style.visibility = "visible"
  })

  // When the close button is pressed in the random recipes modal
  randomRecipesModalCloseIcon.addEventListener("click", () => {
    // Hide the background
      background.style.visibility = "hidden"
    // Hide the modal
      randomRecipesModal.style.visibility = "hidden"
    // Allow clicking in the background
      bodyContainer.style.pointerEvents = "auto"
    // Remove the randomly chosen recipes
      randomRecipesContainer.innerHTML = ""
  })
}
