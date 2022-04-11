(function () {
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
})();

(function () {
  const burgerMenuBtn = document.querySelector('.burger-btn');
  const sideMenu = document.querySelector('.main-nav__list-wrap');
  const closeMenuBtn = document.querySelector('.close-btn');

  burgerMenuBtn.addEventListener('click', () => {
    let expanded = burgerMenuBtn.getAttribute('aria-expanded') === 'true';
    burgerMenuBtn.setAttribute('aria-expanded', !expanded);
    sideMenu.classList.add('main-nav__list-wrap--show');
  });

  closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('main-nav__list-wrap--show');
  });

  const focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = sideMenu.querySelectorAll(focusableElements)[0];
  const focusableContent = sideMenu.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  document.addEventListener('keydown', (evt) => {
    let isTabPressed = evt.key === 'Tab' || evt.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    if (evt.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        evt.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        evt.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();
})();