// Importing
const recipe_info = window.recipe_info
const recipe_search = window.recipe_search

const apiKey = "6f95dd3a57c24cb6af74c79f296655c2"

recipe_info.getRecipeInfo("654959", apiKey).then(recipe => console.log(recipe))
recipe_search.search("pasta", apiKey)
