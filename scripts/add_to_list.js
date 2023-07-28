const favoritesListener = (recipeContainer) => {
  const addToListIcon = recipeContainer.querySelector(".icon")
  addToListIcon.addEventListener("click", () => {
    const recipeName = recipeContainer.querySelector(".name").textContent
    const recipeID = recipeContainer.id
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
