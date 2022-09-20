const selector = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

selector.value = 16;
selector.addEventListener('input', ()=> {
  text.style.fontSize = `${selector.value}px`;
  
});
