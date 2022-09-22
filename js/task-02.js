const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientslist = document.querySelector("#ingredients");


let ingredientItems = ingredients.map((item) =>  {
let  ingredientItem = document.createElement('li')
ingredientItem.textContent = item;
ingredientItem.classList.add('item')
  return ingredientItem;
})
ingredientslist.append(...ingredientItems);


console.log(ingredientslist);
