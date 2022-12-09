let categories = document.querySelectorAll('#categories .item').length;
console.log(`Number of categories:${categories}`);
const listItem = document.querySelectorAll('.item');

listItem.forEach(item => {
  const text = item.querySelector('h2').textContent;
  const el = item.querySelectorAll('li').length;
  console.log(`Category: ${text}`);
  console.log(`Elements: ${el}`);
});
