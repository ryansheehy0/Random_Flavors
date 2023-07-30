window.randomRecipeInit = () => {
  // Get the dom elements
    const randomRecipesBtn = document.querySelector("#random-recipes")
    const randomRecipesModal = document.querySelector("#random-recipes-modal")
    const randomRecipesModalCloseIcon = randomRecipesModal.querySelector(".mdi-close")
    const randomRecipesContainer = randomRecipesModal.querySelector("#random-recipes-container")
    const randomDrinkContainer = randomRecipesModal.querySelector("#random-drink-container")
    const background = document.querySelector("#background")
    const bodyContainer = document.querySelector("#body-container")
  // When Random Recipes Button is pressed
  randomRecipesBtn.addEventListener("click", async () => {
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
        <button class="random-favorites-button text-[var(--brown)] bg-[var(--green)] w-fit h-[var(--height)] rounded-[var(--radius)] border-2 border-[var(--brown)] custom-font-size whitespace-nowrap px-[var(--space-inside)] my-[var(--space-inside)]" data-recipeid="${recipe.id}">
          ${recipe.name}
        </button>
      `)
      // Get newly created buttons
        const randomFavoriteButton = document.querySelector(`.random-favorites-button[data-recipeid="${recipe.id}"]`)

      // Add event listener to the buttons
        randomFavoriteButton.addEventListener("click", () => {
          window.showRecipeDescription(recipe.id, recipe.name, false)
        })
    })

    // Add random drink
      await window.randomDrinkInit(randomDrinkContainer)

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
    // Remove the randomly chosen drink
      randomDrinkContainer.innerHTML = ""
  })
}
