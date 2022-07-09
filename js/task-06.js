const inputEll = document.querySelector('#validation-input');


inputEll.addEventListener('blur', onBlurinput);

function onBlurinput(event) {
    if (event.currentTarget.value.length === Number(inputEll.dataset.length)) {
        inputEll.classList.remove('invalid');
        return inputEll.classList.add('valid');
    }
    inputEll.classList.remove('valid');
    return inputEll.classList.add('invalid');
}



// inputEll.addEventListener('blur', event => {
//     if (event.currentTarget.value.length === Number(inputEll.dataset.length)) {
//         inputEll.classList.add('valid');
//         console.log('red', inputEll)
//     } else {
//         inputEll.classList.replace('valid', 'invalid');

//     }
// });
