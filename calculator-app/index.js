const themeState = document.querySelector('#theme-selector');
const themeButtons = document.querySelectorAll('#theme-selector > button');
const keypad = document.querySelectorAll('keypad > button');
const resultButton = document.querySelector('button[data-key="="]');
const input = document.querySelector('input');
let inputState = '';

function setTheme(e) {
    themeState.dataset.themeProfile = e.target.innerHTML;
}

function updateInput(e) {
    console.log(e.target);
    switch (e.target.dataset.key){
    case 'RESET':
        console.log('reset');
        input.value = '';
        break;
    case 'DEL':
        input.value = input.value.slice(0, -1);
        break;
    case '=':
        calculateResult();
        break;
    default:
        input.value += e.target.dataset.key;
    }
}

function updateInputState() {
    inputState = input.value;
}

function calculateResult() {
    input.value = eval(inputState);
}

function handleEnter(e) {
    if (e.key === 'Enter') calculateResult();
}

themeButtons.forEach(button => {
    button.addEventListener('click', setTheme);
});
keypad.forEach(button => {
    button.addEventListener('click', updateInput);
    button.addEventListener('click', updateInputState);
});
input.addEventListener('input', updateInputState);
resultButton.addEventListener('click', calculateResult);
window.addEventListener('keydown', handleEnter);