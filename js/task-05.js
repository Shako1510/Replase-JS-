
const inputEll = document.querySelector('input');
console.log(inputEll);

const placeholderEll = document.querySelector('[placeholder]');
console.log(placeholderEll);

const inputSpanEll = document.querySelector('span');
console.log(inputSpanEll);



inputEll.addEventListener('input', onInputChange);
placeholderEll.addEventListener('input', onInputBlur);


function onInputChange(event) {

    console.log(event.currentTarget.value);

    inputSpanEll.textContent = event.currentTarget.value;

}


inputEll.addEventListener('focus', onInputFocus);
inputEll.addEventListener('blur', onInputBlur);

function onInputFocus() {
    inputEll.style.outlineColor = 'lightblue';
    console.log('focus on input');
}

function onInputBlur() {
    console.log('blur on input');
}