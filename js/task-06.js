const input = document.querySelector('#validation-input')

const dataLength = Number(input.dataset.length)

input.addEventListener("blur", event =>{
    if ( event.currentTarget.value.length !== dataLength){

        input.classList.remove('valid'),
        input.classList.add('invalid')
    }
    
 else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
} )
//  можно как то по другому?