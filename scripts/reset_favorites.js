const resetFavorites = () => {
  const favoritesContainer = document.querySelector("#favorite-container")
  // Reset the favorites list
    favoritesContainer.innerHTML = `<h2 id="favorite-title">Favorites</h2>`
  // Add each of the favorites to the favorites list
    window.favorites.forEach(favorite => {
      // Id has "a" in front because querySelector needs a letter to start with
      favoritesContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <button class="favorite-buttons" id="a${favorite.id}">
          <i class="icon mdi mdi-delete"></i>
          ${favorite.name}
        </button>
      `)
      // Get the newly created favorites button
      // Add event listener on trash icon
        // Show the delete modal. visibility: show
        // Prevent clicking on background. bodyContainer.style.pointerEvents = "none" // Don't allow clicking the background
   })
}

// Exporting
window.reset_favorites = {
  resetFavorites
}
