

const formEll = document.querySelector('.login-form');
console.log(formEll);


formEll.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formListEll = event.currentTarget.elements;

    const email = formListEll.email.value;
    const password = formListEll.password.value;
    const formData = {
        email,
        password,
    };
    // const formData = new FormData(event.currentTarget);


    if (email === '' || password === '') {
        alert('Заповни всі поля форми');
    } else {

        // Варіант збору данних введених за доп formData, і перевірити значення через forEach.
        // formData.forEach((value, name) => {
        //     // console.log('onFormSubmit -> name', name);
        //     // console.log('onFormSubmit -> value', value);
        //     console.log(name, value);

        // })
        console.log(formData);

    };
    return formEll.reset();
};




