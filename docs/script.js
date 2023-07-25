// Importing
const recipe_info = window.recipe_info
const recipe_search = window.recipe_search

const apiKey = "6f95dd3a57c24cb6af74c79f296655c2" //spoonacular

// Set random recipes event listeners
window.random_recipes.randomRecipeInit()

// Setting favorites list
  // Get the favorites from the local storage
  window.favorites = JSON.parse(localStorage.getItem("favorites"))
  if(favorites === null){// Nothing in local storage
    favorites = []
  }
  window.reset_favorites.resetFavorites()

recipe_info.getRecipeInfo("654959", apiKey).then(recipe => console.log(recipe))
recipe_search.search("pasta", apiKey)

// Get the search bar
// Add event listener submit event and if that doesn't work use keycode for enter
  // Get the text from search from value 
  // Check if there is text
  // Pass to search function
