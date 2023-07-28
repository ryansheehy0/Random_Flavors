const searchContainer = document.querySelector("#search-container")

const search = async (searchTerm, apiKey) => {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => data.results)
  .then(recipes => {
    recipes.forEach(recipe => {
      const name = recipe.title
      const img = recipe.image
      const id = recipe.id
      // Id has "a" in front because querySelector needs a letter to start with
      searchContainer.insertAdjacentHTML("beforeend"/*Last Child*/, `
        <div class="recipe-container" id="a${id}">
          <i class="icon mdi mdi-playlist-plus"></i>
          <h2 class="name">${name}</h2>
          <img src="${img}" alt="${name} image">
        </div>
      `)
      // Get newly created recipe container
        const recipeContainer = document.querySelector(`#a${id}`)
      // Make event listener for adding to favorites list icon button
        window.add_to_list.favoritesListener(recipeContainer)
    })
  })
  .catch(error => {
      console.log(error)
  })
}

// Exporting
window.recipe_search = {
  search
}
