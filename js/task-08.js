const form = document.querySelector('.login-form');
const newForm = {};
const onSubmit = event => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  if (formEl.email.value === '' || formEl.password.value === '') {
    alert('все поля должны быть заполнены');
  } else {
    newForm.email = formEl.email.value;
    newForm.password = formEl.password.value;
    console.log(newForm);
    event.currentTarget.reset();
  }
};
form.addEventListener('submit', onSubmit);
const passwordBtn = document.querySelector('#showPass');
const showPassword = event => {
  if (form.password.getAttribute('type') === 'password') {
    form.password.setAttribute('type', 'text');
  } else form.password.setAttribute('type', 'password');
};
passwordBtn.addEventListener('click', showPassword);
