function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

const changeCollor = event => {
  document.body.style.background = getRandomHexColor();
  text.textContent = `${getRandomHexColor()}`;
};
btn.addEventListener('click', changeCollor);
