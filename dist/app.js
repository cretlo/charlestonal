"use strict";

var navLinks = document.querySelector('.nav-links');
var burgerContainer = document.querySelector('.burger-container');
var open = document.getElementById('open');
var close = document.getElementById('close');
var heroContainer = document.querySelector('.hero-container');
var modal = document.querySelector('.modal');
var previews = document.querySelectorAll('.gallery-container img');
var largeImg = document.querySelector('.large-img');
var caption = document.querySelector('.caption');
var anchorLinks = document.querySelectorAll('.nav-links li a'); // Opens navigation on mobile

open.addEventListener('click', function () {
  navLinks.classList.toggle('nav-open');
  burgerContainer.classList.toggle('open');
}); // Closes navigation on mobile

close.addEventListener('click', function () {
  navLinks.classList.toggle('nav-open');
  burgerContainer.classList.toggle('open');
}); // Closes navigation if a link is clicked, on mobile

anchorLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (navLinks.classList.contains('nav-open')) {
      navLinks.classList.remove('nav-open');
      burgerContainer.classList.toggle('open');
    }
  });
}); // Large image modal displayed when a preview is clicked

previews.forEach(function (preview) {
  preview.addEventListener('click', function (e) {
    var largeSrc = e.target.getAttribute('data-original');
    var altAtr = e.target.getAttribute('alt');
    largeImg.src = "".concat(largeSrc);
    caption.innerHTML = altAtr;
    modal.classList.add('open');
  });
}); // Closes modal clicked anywhere

modal.addEventListener('click', function (e) {
  if (e.target.classList[1] === 'open' || e.target.classList[0] === 'large-img') {
    modal.classList.remove('open');
    largeImg.src = '';
  }
}); // Fades hero into view when content is loaded

window.addEventListener('DOMContentLoaded', function () {
  heroContainer.classList.add('active');
});