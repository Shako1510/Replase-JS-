function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEll = document.querySelector('button.change-color');
console.log(buttonEll);

const divEll = document.querySelector('.widget');
console.log(divEll);

const spanEll = document.querySelector('.color');
console.log(spanEll);

buttonEll.addEventListener('click', changeColorBody);

function changeColorBody() {

  divEll.style.backgroundColor = getRandomHexColor();
  spanEll.textContent = getRandomHexColor();

}
