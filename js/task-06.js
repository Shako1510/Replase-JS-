const inputEll = document.querySelector('#validation-input');

console.log(inputEll);
// inputEll.classList.add('valid');



inputEll.addEventListener('blur', event => {
    if (event.currentTarget.value.length === Number(inputEll.dataset.length)) {
        inputEll.classList.add('valid');
        console.log('red', inputEll)
    } else {
        inputEll.classList.replace('valid', 'invalid');

    }
});
