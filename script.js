var burger = document.querySelector('.burger');
var menu = document.getElementById('menu');
burger.addEventListener('click', function () {
  burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
});
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});
