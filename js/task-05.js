
const inputEll = document.querySelector('input');
console.log(inputEll);

const inputSpanEll = document.querySelector('span');
console.log(inputSpanEll);



inputEll.addEventListener('input', onInputChange);



function onInputChange(event) {



    if (event.currentTarget.value === '') {
        inputSpanEll.textContent = 'Anonymous';

    }

    else {
        inputSpanEll.textContent = event.currentTarget.value;
    }
}


// Хотів стилізувати інпут при фокусі і блурі
// inputEll.addEventListener('focus', onInputFocus);
// inputEll.addEventListener('blur', onInputBlur);

// function onInputFocus() {
//     inputEll.style.outlineColor = 'lightblue';
//     console.log('focus on input');
// }

// function onInputBlur() {

//     console.log('blur on input');
// }