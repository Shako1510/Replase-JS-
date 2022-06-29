

const battonDecrementEll = document.querySelector('button[data-action="decrement"]');
console.log(battonDecrementEll);

const battonIcrementtEll = document.querySelector('button[data-action="increment"]');
console.log(battonIcrementtEll);

const buttonValueEll = document.querySelector('#value');
console.log(buttonValueEll);


const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },

};


battonIcrementtEll.addEventListener('click', (event) => {

    counterValue.increment();
    buttonValueEll.textContent = counterValue.value;

});

battonDecrementEll.addEventListener('click', (event) => {
    counterValue.decrement();
    buttonValueEll.textContent = counterValue.value;
});

