window.randomDrinkInit = async (randomDrinkContainer) => {
  try{
    const randomDrink = await window.getRandomDrink()
    randomDrinkContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <h2 class="text-2xl font-bold">Random Drink</h2> 
        <p>${randomDrink.name}</p> 
        <img class="w-[400px] h-auto rounded-[var(--radius)]" src="${randomDrink.image}" alt="random drink image">
        <p>${randomDrink.instructions}</p>
    `)
    randomDrink.ingredients.forEach(ingredient => {
      randomDrinkContainer.insertAdjacentHTML("beforeend" /* Last Child */, `
        <li class="list-none">${ingredient}</li>
      `) 
    })
  }catch(error){
    console.log(error)
  }
}
