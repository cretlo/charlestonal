(() => {
  var e = document.querySelector('.nav-links'),
    t = document.querySelector('.burger-container'),
    n = document.getElementById('open'),
    c = document.getElementById('close'),
    o = document.querySelector('.hero-container'),
    a = document.querySelector('.modal'),
    i = document.querySelectorAll('.gallery-container img'),
    s = document.querySelector('.large-img'),
    l = document.querySelector('.caption'),
    r = document.querySelectorAll('.nav-links li a');
  n.addEventListener('click', function () {
    e.classList.toggle('nav-open'), t.classList.toggle('open');
  }),
    c.addEventListener('click', function () {
      e.classList.toggle('nav-open'), t.classList.toggle('open');
    }),
    r.forEach(function (n) {
      n.addEventListener('click', function () {
        e.classList.contains('nav-open') &&
          (e.classList.remove('nav-open'), t.classList.toggle('open'));
      });
    }),
    i.forEach(function (e) {
      e.addEventListener('click', function (e) {
        var t = e.target.getAttribute('data-original'),
          n = e.target.getAttribute('alt');
        (s.src = ''.concat(t)), (l.innerHTML = n), a.classList.add('open');
      });
    }),
    a.addEventListener('click', function (e) {
      ('open' !== e.target.classList[1] &&
        'large-img' !== e.target.classList[0]) ||
        (a.classList.remove('open'), (s.src = ''));
    }),
    window.addEventListener('DOMContentLoaded', function () {
      o.classList.add('active');
    });
})();
