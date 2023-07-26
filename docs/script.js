const apiKey = "6f95dd3a57c24cb6af74c79f296655c2" //spoonacular

// Inits
  // Set random recipes button and modal event listeners
    window.random_recipes.randomRecipeInit()

// Setting favorites list
  // Get the favorites from the local storage
  window.favorites = JSON.parse(localStorage.getItem("favorites"))
  if(favorites === null){// Nothing in local storage
    favorites = []
  }
  window.reset_favorites.resetFavorites()

window.recipe_search.search("pasta", apiKey)
