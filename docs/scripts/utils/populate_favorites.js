window.populateFavorites = () => {
  const favoritesContainer = document.querySelector("#favorite-container")
  // Reset the favorites list
    favoritesContainer.innerHTML = `<h2 class="my-[var(--space-inside)] text-3xl font-bold" id="favorite-title">Favorites</h2>`
  // Add each of the favorites to the favorites list
    window.favorites.forEach(favorite => {
      favoritesContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <button class="favorite-buttons text-[var(--brown)] bg-[var(--green)] w-fit h-[var(--height)] rounded-[var(--radius)] border-2 border-[var(--brown)] custom-font-size whitespace-nowrap px-[var(--space-inside)] m-[var(--space-inside)]" data-recipeid="${favorite.id}">
          <i class="icon mdi mdi-delete"></i>
          ${favorite.name}
        </button>
      `)
      // Get the recently created favorite recipe button
        const favoriteButton = document.querySelector(`.favorite-buttons[data-recipeid="${favorite.id}"]`)
      // Add event listener for the delete icon/button
        window.deleteFromFavorites(favoriteButton)
      // Recipe description
        favoriteButton.addEventListener("click", () => {
          window.showRecipeDescription(favorite.id, favorite.name, true) 
        })
   })
}
