const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');
input.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    name.textContent = 'Anonymus';
  } else {
    name.textContent = event.currentTarget.value;
  }
});
