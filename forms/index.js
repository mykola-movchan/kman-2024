const submit = document.querySelector('#submit');

function handleForm(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('input[type="text"], textarea');
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const checkbox = document.querySelector('input[type="checkbox"]');
    const sectionRadio = document.querySelector('section.grid-container');
    const popover = document.querySelector('#success');

    for (input of inputs) {
        if(!input.value || input.value.trim().length === 0) {
            input.parentElement.classList.add('error-active');
        } else {
            input.parentElement.classList.remove('error-active');
        }
    }

    const radios = Array.from(radioInputs);
    if (radios.filter(r => r.checked).length === 1) {
        sectionRadio.classList.remove('error-active');
    } else {
        console.log(radioInputs[0]);
        sectionRadio.classList.add('error-active');
    }

    if (!checkbox.checked) {
        checkbox.parentElement.classList.add('error-active');
    } else {
        checkbox.parentElement.classList.remove('error-active');
    }

    if (document.querySelectorAll('.error-active').length === 0) {
        popover.showPopover();
    }
}

submit.addEventListener('click', handleForm);