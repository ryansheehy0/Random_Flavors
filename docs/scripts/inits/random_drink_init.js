window.randomDrinkInit = async (randomDrinkContainer) => {
  try{
    const randomDrink = await window.getRandomDrink()
    randomDrinkContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <h2>Random Drink</h2> 
        <p>${randomDrink.name}</p> 
        <img src="${randomDrink.image}" alt="random drink image">
        <p>${randomDrink.instructions}</p>
    `)
    randomDrink.ingredients.forEach(ingredient => {
      randomDrinkContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <li>${ingredient}</li>
      `) 
    })
  }catch(error){
    console.log(error)
  }
}
