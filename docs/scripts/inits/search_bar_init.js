window.searchBarInit = () => {
  // Get dom elements
    const searchBar = document.querySelector("#search")
    const searchContainer = document.querySelector("#search-container")

  searchBar.addEventListener("keypress", async (event) => {
    if(event.key !== "Enter"){
      return
    }
    
    // Get what was submitted
      const searchTerm = searchBar.value
    // Check if there is a search term
      if(searchTerm === ""){
        console.log("No searching empty string")
        return
      }
    // Wait for the recipes from the search
      const recipes = await window.getRecipeSearch(searchTerm)
    // Check to see if there are recipes
      if(recipes.length === 0){
        console.log("No recipes from search")
        // Need to display no recipes found in the search container
        return
      }
    // Clear the old search container
      searchContainer.innerHTML = ""
    // Populate the Search Container if there are recipes
      recipes.forEach(recipe => {
        const name = recipe.title
        const img = recipe.image
        const recipeid = recipe.id
        searchContainer.insertAdjacentHTML("beforeend"/*Last Child*/, `
          <div class="recipe-container bg-[var(--light)] text-[var(--brown)] border-2 border-[var(--brown)] rounded-[var(--radius)] m-[var(--space-inside)] p-[var(--space-inside)] w-[312px] cursor-pointer relative" data-recipeid="${recipeid}">
            <i class="icon mdi mdi-playlist-plus"></i>
            <h2 class="name m-[0px] mt-[2px] text-left ml-[30px] w-[calc(100%-30px-2*var(--space-inside))] custom-font-size font-bold">${name}</h2>
            <img class="rounded-[var(--radius)] mt-[var(--space-inside)]" src="${img}" alt="${name} image">
          </div>
        `)
        // Get newly created recipe container
          const recipeContainer = document.querySelector(`.recipe-container[data-recipeid="${recipeid}"]`)
        // Make event listener for adding to favorites list icon button
          window.addToFavoritesClickInit(recipeContainer)
        // Recipe description
          recipeContainer.addEventListener("click", () => {
            window.showRecipeDescription(recipeid, name, true)
          })
      })
      })
}
