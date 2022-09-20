const menuList = document.querySelectorAll('#categories .item')

console.log(`Number of categories : ${menuList.length}`);

const itemsList = document.querySelectorAll('.item');
itemsList.forEach( item => {
    const text = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll( 'li').length;

    console.log(`Category: ${text}`);
    console.log(`Elements: ${elements}`);

})
