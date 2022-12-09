const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
slider.addEventListener('input', event => {
  text.style.fontSize = `${slider.value}px`;
});
