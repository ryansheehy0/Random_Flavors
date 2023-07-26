const favoritesListener = (recipeContainer) => {
  const addToListIcon = recipeContainer.querySelector(".icon")
  addToListIcon.addEventListener("click", () => {
    const recipeName = recipeContainer.querySelector(".name").textContent
    const recipeID = recipeContainer.id
    // Check to make sure the added recipe isn't already in the favorites list
      for(let i=0; i < window.favorites.length; i++){
        const favorite = window.favorites[i]
        if(favorite.id === recipeID){
          return // Return out of the addEventListener function
        }
      }
    // Add to global favorites var
      window.favorites.push({name: recipeName, id: recipeID})
    // Sets the local storage
      localStorage.setItem("favorites", JSON.stringify(window.favorites))
    // Resets favorites list to include the newly added favorited recipe
      window.reset_favorites.resetFavorites()
  })
}

// Exporting
window.add_to_list = {
  favoritesListener
}
