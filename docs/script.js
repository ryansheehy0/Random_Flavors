// Search for recipes. Get name of recipe and short description
const apiKey = "6f95dd3a57c24cb6af74c79f296655c2"
let search = "pasta"
const searchContainer = document.querySelector("#search-container")
fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${apiKey}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  const recipes = data.results
  recipes.forEach(recipe => {
    const name = recipe.title
    const img = recipe.image
    const id = recipe.id
    searchContainer.insertAdjacentHTML("beforeend"/*Last child*/, `
      <div class="recipe-container" id="${id}">
        <i class="mdi mdi-playlist-plus"></i>
        <h2>${name}</h2>
        <img src="${img}" alt="${name} image">
      </div>
    `)
  })
})
.catch(error => {
    console.log(error)
})

// Get the ingredients and instructions for the recipe
async function getRecipeInfo(recipeID) {
  fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const name = data.title
    let ingredientNames = []
    data.extendedIngredients.forEach(ingredient => {
      ingredientNames.push(`${ingredient.original}`)
    })
    const readyInMinutes = data.readyInMinutes
    const servingSize = data.servings
    const img = data.image
    const description = data.summary

    const instructionDescription = data.instructions
    let instructions = []
    data.analyzedInstructions[0].steps.forEach((instruction, index) => {
      instructions.push(`${index + 1}. ${instruction.step}`)
    })

    console.log("name: " + name)
    console.log("ingredientNames: " + ingredientNames)
    console.log("readInMinutes: " + readyInMinutes)
    console.log("servingSize: " + servingSize)
    console.log("img: " + img)
    console.log("description: " + description)
    console.log("instructionDescription: " + instructionDescription)
    console.log("instructions: " + instructions)
  })
  .catch(error => {
      console.log(error)
  })
}
//getRecipeInfo(654959)
