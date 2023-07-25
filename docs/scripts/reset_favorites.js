const resetFavorites = () => {
  const favoritesContainer = document.querySelector("#favorite-container")
  // Reset the favorites list
    favoritesContainer.innerHTML = ""
  // Add each of the favorites to the favorites list
    window.favorites.forEach(favorite => {
      // Id has "a" in front because querySelector needs a letter to start with
      favoritesContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <button class="favorite-buttons" id="a${favorite.id}">
          <i class="icon mdi mdi-delete"></i>
          ${favorite.name}
        </button>
      `)
    })
}

// Exporting
window.reset_favorites = {
  resetFavorites
}
