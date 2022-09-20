const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
const newForm = {};


function onFormSubmit(event) {
  event.preventDefault();

  if (form.email.value === "" ) {
    alert("не не не, имейл!");

  }
  else if( form.password.value === "") {
alert("не не не, пароль!")
  }
  else{

      
        const formElements = event.currentTarget.elements;
        newForm.mail = formElements.email.value;
        newForm.password = formElements.password.value;
      
      
        let name = formElements.email.value;
        console.log(name);
        
        let from = 0; 
        let to = name.search('@');
        let newName = name.substring(from,to);


        console.log(newForm);
      alert(`ну привет, ${newName}`)
        
      
        event.currentTarget.reset();
  }
}