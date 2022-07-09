function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEll = document.querySelector('body');
const buttonEll = document.querySelector('button.change-color');
const spanEll = document.querySelector('.color');




buttonEll.addEventListener('click', changeColorBody);

function changeColorBody() {

  let color = getRandomHexColor();

  bodyEll.style.background = color;
  spanEll.textContent = color;


}
