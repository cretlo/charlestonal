import './scss/style.scss';

const navLinks = document.querySelector('.nav-links');
const burgerContainer = document.querySelector('.burger-container');
const menuIcon = document.querySelector('.menu-icon');
const crossIcon = document.querySelector('.cross-icon');
const heroContainer = document.querySelector('.hero-container');
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery-container img');
const largeImg = document.querySelector('.large-img');
const caption = document.querySelector('.caption');
const anchorLinks = document.querySelectorAll('.nav-links li a');
const formLabels = document.querySelectorAll('.label');

console.log(largeImg);
console.log(previews);

// Opens navigation on mobile
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burgerContainer.classList.toggle('active');
});

// Closes navigation on mobile
crossIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burgerContainer.classList.toggle('active');
});

// Closes navigation if a link is clicked, on mobile
anchorLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      burgerContainer.classList.toggle('active');
    }
  });
});

// Fades hero into view when content is loaded
window.addEventListener('DOMContentLoaded', () => {
  heroContainer.classList.add('active');
});

// Large image modal displayed when a preview is clicked
previews.forEach(preview => {
  preview.addEventListener('click', e => {
    const largeSrc = e.target.getAttribute('data-original');
    const altAtr = e.target.getAttribute('alt');

    console.log(largeImg.src);

    largeImg.src = `${largeSrc}`;
    caption.innerHTML = altAtr;

    modal.classList.add('open');
  });
});

// Closes modal clicked anywhere
modal.addEventListener('click', e => {
  if (
    e.target.classList[1] === 'open' ||
    e.target.classList[0] === 'large-img'
  ) {
    modal.classList.remove('open');
    largeImg.src = '';
  }
});

formLabels.forEach(label => {
  label.addEventListener('click', e => {
    e.target.nextElementSibling.classList.toggle('active');
  });
});
