window.addToFavoritesClickInit = (recipeContainer) => {
  // Get dom elements
    const addToListIcon = recipeContainer.querySelector(".icon")

  addToListIcon.addEventListener("click", (event) => {
    // Stop clicking of recipe container modal description
      event.stopPropagation()
    const recipeName = recipeContainer.querySelector(".name").textContent
    const recipeid = recipeContainer.dataset.recipeid
    // Check to make sure the added recipe isn't already in the favorites list
      for(let i=0; i < window.favorites.length; i++){
        const favorite = window.favorites[i]
        if(favorite.id === recipeid){
          return // Return out of the addEventListener function
        }
      }
    // Add to global favorites var
      window.favorites.push({name: recipeName, id: recipeid})
    // Sets the local storage
      localStorage.setItem("favorites", JSON.stringify(window.favorites))
    // Resets favorites list to include the newly added favorited recipe
      window.populateFavorites()
  })
}
