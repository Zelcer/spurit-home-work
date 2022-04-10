const collapseTitles = document.querySelectorAll('.collaps__title');

Array.prototype.forEach.call(collapseTitles, collapseTitle => {
  let collapseBtn = collapseTitle.querySelector('.collaps__btn');
  let target = collapseTitle.nextElementSibling;

  collapseBtn.addEventListener('click', () => {
    let expanded = collapseBtn.getAttribute('aria-expanded') === 'true';
    collapseBtn.setAttribute('aria-expanded', !expanded);
    collapseBtn.classList.toggle('collaps__btn--open');
    target.classList.toggle('collaps__desc--show'); 
  });
});

const burgerMenuBtn = document.querySelector('.burger-btn');
const sideMenu = document.querySelector('.main-nav__list-wrap');
const closeMenuBtn = document.querySelector('.close-btn');

burgerMenuBtn.addEventListener('click', () => {
  let expanded = burgerMenuBtn.getAttribute('aria-expanded') === 'true';
  burgerMenuBtn.setAttribute('aria-expanded', !expanded);
  sideMenu.style.display = "block";
});

closeMenuBtn.addEventListener('click', () => {
  sideMenu.style.display = "none";
});