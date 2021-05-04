"use strict";

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

var buttonWorks = document.querySelector('.buttonWorks');
var worksSection = document.querySelector('.work');
buttonWorks.addEventListener('click', function () {
  scrollTo(worksSection);
});
var buttonDown = document.querySelector('.icon__arrow--down');
var aboutSection = document.querySelector('.about');
buttonDown.addEventListener('click', function () {
  scrollTo(aboutSection);
});