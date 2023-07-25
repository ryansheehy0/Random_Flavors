const deleteFavorites = (event) => {
  // Add event listener to Delete modal ok
    // Get the id from the favorite recipe button from the event
      // event.target.parentElement.id
    // Find the index of the id in the window.favorites global var
    // Delete that element from the window.favorites
    // Update the local storage with window.favorites
    // Call resetFavorites window.reset_favorites.resetFavorites()
    // Allow clicking on the background. bodyContainer.style.pointerEvents
  // Add event listener to Delete modal cancel
}

// Exporting
window.delete_from_list = {
  deleteFavorites
}
