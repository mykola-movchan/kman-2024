const menuBlock = document.querySelector('header > nav');
const menuButton = document.querySelector('#menu');

function handleMenu() {
    menuBlock.classList.toggle('open');
    menuBlock.classList.contains('open') ? menuButton.src = menuButton.dataset.close : menuButton.src = menuButton.dataset.open;
}

menuButton.addEventListener('click', handleMenu);