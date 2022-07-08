function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEll = Number(document.querySelector('input[type]'));
console.log(inputEll);

const createBtnEll = document.querySelector('button[data-create]');
console.log(createBtnEll);

const destroyBtnEll = document.querySelector('button[data-destroy]');
console.log(destroyBtnEll);

const createBoxEll = document.querySelector('#boxes');
console.log(createBoxEll);

createBtnEll.addEventListener('click', createBoxes);

// const newBoxEll = document.createElement('div');

function createBoxes(amount) {

  let fragment = new DocumentFragment();
  const arrayDiv = [];

  for (let i = 0; i < amount; i += 1) {

    const value = (20 + i * 10);
    const divNew = document.createElement('div');

    divNew.style.width = `${value}px`;
    divNew.style.height = `${value}px`;
    divNew.style.backgroundColor = getRandomHexColor();

    arrayDiv.push(divNew);


  }
  createBoxEll.append(divNew);
};

