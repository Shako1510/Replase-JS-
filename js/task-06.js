const inputEll = document.querySelector('#validation-input');

console.log(inputEll);
inputEll.classList.add('valid');



inputEll.addEventListener('blur', event => {
    if (event.currentTarget.value.length === inputEll.dataset.length) {
        inputEll.classList.toggle('valid');
        console.log('red', inputEll)
    }
});
