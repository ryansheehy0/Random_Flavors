window.getRecipeSearch = (searchTerm) => {
  // Get dom elements
    const searchContainer = document.querySelector("#search-container")

  return new Promise((resolve, reject) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${window.spoonacularApiKey}`)
    .then(response => response.json())
    .then(data => data.results)
    .then(recipes => {
      resolve(recipes)
    })
    .catch(error => {
        console.log(error)
        reject([])
    })
  })
}
