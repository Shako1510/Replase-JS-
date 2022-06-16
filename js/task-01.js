


const categories = document.querySelector('#categories');

console.log('Number of categories:', categories.children.length);

const categoryElem = document.querySelectorAll('li.item');
// console.log(categoryElem);

categoryElem.forEach((categori) => {
    console.log(`Category: ${categori.firstElementChild.textContent}`);
    console.log(`Elements: ${categori.lastElementChild.children.length}`);

});


// const menuItemParent = document.querySelectorAll('li.item');

// console.log(menuItemParent);

// const menuFirstChild = menuItemParent[1].lastElementChild.children;

// console.log(menuFirstChild);

// const menuChildText = menuFirstChild[0];
// console.log(menuChildText.textContent);
// const menuItemsByClass = document.querySelectorAll('.item');
// const menuItemlength = menuItemsByClass.length;

// console.log('Number of categories:', menuItemlength);


// const text = document.querySelector('h2');


// console.log('Category:', text.textContent);

// const menuItemUl = document.querySelectorAll('.item ul ');

// console.log(menuItemUl[0]);