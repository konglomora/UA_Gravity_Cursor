let burgerButton = document.querySelector('.burgerButton');
let navBurger = document.querySelector('.nav__burger');
let header = document.querySelector('.header');
let intro = document.querySelector('.intro');
let html = document.querySelector('html');
let textFooter = document.querySelector('.text--footer');
let textInner = document.querySelector('.intro__text--inner');

burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('active');
    navBurger.classList.toggle('active');
    header.classList.toggle('fixed');
    intro.classList.toggle('hidden');
    textFooter.classList.toggle('hidden');
    textInner.classList.toggle('active');
    html.classList.toggle('overflowHidden');

});
