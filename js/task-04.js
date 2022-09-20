const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]')
const counter = document.querySelector('#value')
let coutarValue = 0;

minusBtn.addEventListener('click', () => {
counter.textContent = coutarValue -= 1;
})

plusBtn.addEventListener('click', () => 
counter.textContent = coutarValue += 1 )