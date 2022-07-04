

const formEll = document.querySelector('.login-form');
console.log(formEll);


formEll.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formListEll = event.currentTarget.elements;
    console.log(formListEll);

    if (!formEll.elements.email.value) {
        alert('Заповни всі поля форми');
    }



};
