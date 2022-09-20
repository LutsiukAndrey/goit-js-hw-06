

const refs = {
 input: document.querySelector('#name-input'),
 massage: document.querySelector('#name-output')
}

refs.input.addEventListener( 'input', event => {
    event.currentTarget.value === '' ?(refs.massage.textContent = 'Anonymous') : (refs.massage.textContent = event.currentTarget.value)
        
});

