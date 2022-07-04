const inputEll = document.querySelector('#font-size-control');

console.log(inputEll);

// console.log(inputell.getAttribute('min'));
// console.log(inputell.getAttribute('max'));

const spanEll = document.querySelector('#text');
// console.log(spanEll.textContent);

inputEll.addEventListener('input', changeSpanTextFontSize);



function changeSpanTextFontSize(event) {
    // console.log(inputEll.value);

    spanEll.style.fontSize = event.currentTarget.value + 'px';

    // варіант вирішення 2
    // spanEll.style.fontSize = `${inputEll.value}px`;
};