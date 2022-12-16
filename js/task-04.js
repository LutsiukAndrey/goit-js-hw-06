const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');
let counterValue = 0;
plusBtn.addEventListener('click', () => {
  counterValue += 1;
  if (counterValue >= 0) {
    counter.textContent = counterValue;
  } else if (counterValue >= 10) {
    alert('f');
    console.log('f');
  }
});
minusBtn.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue -= 1;
    counter.textContent = counterValue;
  }
});
