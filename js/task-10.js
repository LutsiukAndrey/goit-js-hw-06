function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
let inputValue = 0;
input.addEventListener('input', function (e) {
  inputValue = Number(e.currentTarget.value);
});

const create = document.querySelector('button[data-create]');
let element = '';
const destroy = document.querySelector('button[data-destroy]');
const elements = document.querySelector('#boxes');
let size = 30;

const createEl = event => {
  // const element = elements.createElement('div');
  for (let i = 1; i <= inputValue; i++) {
    element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.margin = '5px';
    elements.append(element);
    size += 10;
  }
};
const destroyBoxes = event => {
  elements.innerHTML = '';

  size = 30;
};
create.addEventListener('click', createEl);
destroy.addEventListener('click', destroyBoxes);
