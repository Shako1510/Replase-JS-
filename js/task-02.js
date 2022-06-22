const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
console.log(list);

const elements = ingredients.map(ingredient => {
  const newElLi = document.createElement('li');

  newElLi.classList.add = ('.item');
  newElLi.textContent = [ingredient];

  return newElLi;

});

console.log(elements);

list.append(...elements);


