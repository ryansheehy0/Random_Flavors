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
      searchContainer.insertAdjacentHTML("beforeend"/*Last Child*/, `
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
}

// Exporting
window.recipe_search = {
  search
}
