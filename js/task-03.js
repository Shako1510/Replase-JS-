const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galerry = document.querySelector('.gallery');

console.log(galerry);




// Це простий варіант для створення на кожній ітерації тега img
// const imgGallary = images.map(image => {
//   const imgEll = document.createElement('img');
//   const imgLiEll = document.createElement('li');

//   imgEll.src = image.url;
//   imgEll.alt = image.alt;
//   imgEll.width = 520;
//   imgEll.classList.add('item-foto');





//   imgLiEll.append(imgEll);

//   return imgLiEll;

// });

// galerry.append(...imgGallary);

// console.log(imgGallary);






// <!--Варіант шаблонна строка зі стилями-->

const imgEll = images.map(({ url, alt }) => {

  return `<li><img class = 'item-foto'  alt = '${alt}'; src='${url}' width = 320px;></li>`;
}).join('');

console.log(imgEll);


galerry.insertAdjacentHTML("beforeend", `${imgEll}`);





