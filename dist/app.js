const heroContainer = document.querySelector('.hero-container');

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery-container img');
const largeImg = document.querySelector('.large-img');
const caption = document.querySelector('.caption');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger-container').firstElementChild;
const links = document.querySelectorAll('.nav-links li a');

console.log(burger);

// Opens navigation on mobile
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});

// Closes navigation on mobile
links.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-open')) {
      navLinks.classList.remove('nav-open');
    }
  });
});

// Large image modal display
previews.forEach((preview) => {
  preview.addEventListener('click', (e) => {
    const largeSrc = e.target.getAttribute('data-original');
    const altAtr = e.target.getAttribute('alt');

    largeImg.src = `${largeSrc}`;
    caption.innerHTML = altAtr;

    modal.classList.add('open');
  });
});

// Modal closing
modal.addEventListener('click', (e) => {
  if (
    e.target.classList[1] === 'open' ||
    e.target.classList[0] === 'large-img'
  ) {
    modal.classList.remove('open');
    largeImg.src = '';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  heroContainer.classList.add('active');
});
