function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEll = document.querySelector('input');
const createBtnEll = document.querySelector('button[data-create]');
const destroyBtnEll = document.querySelector('button[data-destroy]');
const createBoxEll = document.querySelector('#boxes');


createBtnEll.addEventListener('click', createBoxes);
destroyBtnEll.addEventListener('click', destroyBoxes);

// const newBoxEll = document.createElement('div');

function createBoxes() {

  let numbers = [];

  for (let i = 0; i <= inputEll.value; i++) {
    numbers.push(i);
  }
  const createDiv = numbers.map((number) => {
    const divNew = document.createElement('div');
    const value = ((30 + createBoxEll.childElementCount * 10) + number * 10);
    divNew.style.width = `${value}px`;
    divNew.style.height = `${value}px`;
    divNew.style.backgroundColor = getRandomHexColor();
    return divNew;
  });

  createBoxEll.append(...createDiv);
  console.log(createBoxEll);
};

function destroyBoxes() {
  inputEll.value = '';
  createBoxEll.innerHTML = '';
};

