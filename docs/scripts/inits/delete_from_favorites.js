window.deleteFromFavorites = (favoriteButton) => {
  // Get dom elements
    const deleteIcon = favoriteButton.querySelector(".mdi-delete")

  deleteIcon.addEventListener("click", (event) => {
    // Prevent the delete from propagating to the button
      event.stopPropagation() 
    // Get the index from favorites list of the thing we want to delete
      // Get the id of the favorites recipe button we want to delete
        const recipeid = favoriteButton.dataset.recipeid
      // Get the index if it matches the id in the favorites list
        let indexDeleted
        for(let i=0; i < window.favorites.length; i++){
          const favorite = window.favorites[i]

          if(favorite.id === recipeid){
            indexDeleted = i
            break
          }
        }
    // Delete from favorites list with the index
      window.favorites.splice(indexDeleted, 1)
    // Update local storage
      localStorage.setItem("favorites", JSON.stringify(window.favorites))
    // Re populate the favorites list
      window.populateFavorites()
  })
}
