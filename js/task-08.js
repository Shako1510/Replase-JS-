

const formEll = document.querySelector('.login-form');
console.log(formEll);


formEll.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formListEll = event.currentTarget.elements;

    const formData = new FormData(event.currentTarget);


    if (formEll.elements.email.value === '' || formEll.elements.password.value === '') {
        alert('Заповни всі поля форми');
    } else {
        formData.forEach((value, name) => {
            console.log('onFormSubmit -> name', name);
            console.log('onFormSubmit -> value', value);
        })
        console.log(formData);
    };
    return formEll.reset();
};




