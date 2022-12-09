const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let ingredientsList = document.querySelector('#ingredients');
let ingredientsItems = ingredients.map(text => {
  let ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = text;
  ingredientsItem.classList.add('item');
  return ingredientsItem;
});
ingredientsList.append(...ingredientsItems);
console.log(ingredientsList);
