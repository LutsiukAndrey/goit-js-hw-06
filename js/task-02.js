const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientslist = document.querySelector("#ingredients")

ingredients.forEach( item =>  {
  const ingredientsItem = document.createElement('li')
  ingredientsItem.classList.add('item')
  ingredientsItem.textContent = item;
  ingredientslist.append(ingredientsItem);
  
})


console.log(ingredientslist);



