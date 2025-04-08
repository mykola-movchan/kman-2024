const submit = document.querySelector('#submit');

function validateInputs(inputs) {
    for (input of inputs) {
        if(!input.value || input.value.trim().length === 0) {
            input.parentElement.classList.add('error-active');
        } else {
            input.parentElement.classList.remove('error-active');
        }
    }
}

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!input.value || input.value.trim().length === 0) {
        input.nextElementSibling.dataset.error = "This field is required";
        input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
        input.parentElement.classList.add('error-active');
    } else if (!emailRegex.test(input.value)) {
        input.nextElementSibling.dataset.error = "Please enter a valid email";
        input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
        input.parentElement.classList.add('error-active');
    } else {
        input.parentElement.classList.remove('error-active');
    }
}

function validateRadio(radios, section) {
    if (Array.from(radios).filter(r => r.checked).length === 1) {
        section.classList.remove('error-active');
    } else {
        section.classList.add('error-active');
    }
}

function validateCheckbox(checkbox) {
    if (!checkbox.checked) {
        checkbox.parentElement.classList.add('error-active');
    } else {
        checkbox.parentElement.classList.remove('error-active');
    }
}

function handleForm(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('#fname, #lname, textarea');
    const email = document.querySelector('#email');
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const sectionRadio = document.querySelector('section.grid-container');
    const checkbox = document.querySelector('input[type="checkbox"]');
    const popover = document.querySelector('#success');

    validateInputs(inputs);
    validateEmail(email);
    validateRadio(radioInputs, sectionRadio);
    validateCheckbox(checkbox);

    if (document.querySelectorAll('.error-active').length === 0) {
        popover.showPopover();

        setTimeout(() => {
            popover.hidePopover();
        }, 5000);
    }
}

submit.addEventListener('click', handleForm);