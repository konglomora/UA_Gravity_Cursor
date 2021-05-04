"use strict";

var burgerButton = document.querySelector('.burgerButton');
var navBurger = document.querySelector('.nav__burger');
var header = document.querySelector('.header');
var intro = document.querySelector('.intro');
var html = document.querySelector('html');
var textFooter = document.querySelector('.text--footer');
var textInner = document.querySelector('.intro__text--inner');
burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  navBurger.classList.toggle('active');
  header.classList.toggle('fixed');
  intro.classList.toggle('hidden');
  textFooter.classList.toggle('hidden');
  textInner.classList.toggle('active');
  html.classList.toggle('overflowHidden');
});