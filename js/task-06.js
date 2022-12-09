const input = document.querySelector('#validation-input');
const dataLength = input.dataset.length;
input.addEventListener('blur', event => {
  if (event.currentTarget.value.length != dataLength) {
    classChange('invalid', 'valid', input);
  } else {
    classChange('valid', 'invalid', input);
  }
});
const classChange = (add, remove, element) => {
  element.classList.remove(remove);
  element.classList.add(add);
};
