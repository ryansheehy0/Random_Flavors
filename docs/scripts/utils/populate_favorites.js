window.populateFavorites = () => {
  const favoritesContainer = document.querySelector("#favorite-container")
  // Reset the favorites list
    favoritesContainer.innerHTML = `<h2 id="favorite-title">Favorites</h2>`
  // Add each of the favorites to the favorites list
    window.favorites.forEach(favorite => {
      favoritesContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <button class="favorite-buttons" data-recipeid="${favorite.id}">
          <i class="icon mdi mdi-delete"></i>
          ${favorite.name}
        </button>
      `)
      // Get the recently created favorite recipe button
        const favoriteButton = document.querySelector(`.favorite-buttons[data-recipeid="${favorite.id}"]`)
      // Add event listener for the delete icon/button
        window.deleteFromFavorites(favoriteButton)
   })
}
