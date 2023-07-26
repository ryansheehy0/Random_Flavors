const randomRecipeInit = () => {
  // Get the dom elements
    const randomRecipesBtn = document.querySelector("#random-recipes")
    const randomRecipesModal = document.querySelector("#random-recipes-modal")
    const randomRecipesModalCloseIcon = randomRecipesModal.querySelector(".mdi-close")
    const randomRecipesContainer = randomRecipesModal.querySelector("#random-recipes-container")
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
        <button class="random-recipes-buttons" id="a${recipe.id}">
          ${recipe.name}
        </button>
      `)
    })

    // Show the modal
      randomRecipesModal.style.visibility = "visible"
  })

  // When the close button is pressed in the random recipes modal
  randomRecipesModalCloseIcon.addEventListener("click", () => {
    randomRecipesModal.style.visibility = "hidden"
    // Remove the randomly chosen recipes
      randomRecipesContainer.innerHTML = ""
  })
}

// Exporting
window.random_recipes = {
  randomRecipeInit
}
