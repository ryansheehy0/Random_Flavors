window.spoonacularApiKey = "6f95dd3a57c24cb6af74c79f296655c2"
window.emailApiKey = "38a904ecb7msh0bc540f8136b846p140410jsnf829c39fd221"

// Setting favorites list
  // Get the favorites from the local storage
  window.favorites = JSON.parse(localStorage.getItem("favorites"))
  if(favorites === null){// Nothing in local storage
    favorites = []
  }
  window.populateFavorites()

// Inits
  // Set random recipes button and modal event listeners
    window.randomRecipeInit()
  // Allow searching in the search bar
    window.searchBarInit()
