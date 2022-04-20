// Collapse component
(function () {
  const collapseTitles = document.querySelectorAll('.collaps__title');

  Array.prototype.forEach.call(collapseTitles, collapseTitle => {
    let collapseBtn = collapseTitle.querySelector('.collaps__btn');
    let target = collapseTitle.nextElementSibling;

    collapseBtn.addEventListener('click', () => {
      let expanded = collapseBtn.getAttribute('aria-expanded') === 'true';
      collapseBtn.setAttribute('aria-expanded', !expanded);
      target.classList.toggle('collaps__desc--show');
    });
  });
})();

// Mobile menu
(function () {
  const burgerMenuBtn = document.querySelector('.burger-btn');
  const sideMenu = document.querySelector('.main-nav__list-wrap');
  const sideMenuLinks = sideMenu.querySelectorAll('.main-nav__link');
  const closeMenuBtn = sideMenu.querySelector('.close-btn');

  function hideMenu() {
    sideMenu.setAttribute('aria-hidden', 'true');
    sideMenuLinks.forEach((sidemenuLink) => {
      sidemenuLink.setAttribute('tabindex', '-1');
    });
    closeMenuBtn.setAttribute('tabindex', '-1');
  }

  function showMenu() {
    sideMenu.setAttribute('aria-hidden', 'false');
    sideMenuLinks.forEach((sidemenuLink) => {
      sidemenuLink.setAttribute('tabindex', '0');
    });
    closeMenuBtn.setAttribute('tabindex', '0');
  }

  function checkScreen() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      hideMenu();
    } else {
      showMenu();
    }
  }

  window.addEventListener('resize', () => {
    checkScreen();
  });

  document.addEventListener('DOMContentLoaded', () => {
    checkScreen();
  });

  burgerMenuBtn.addEventListener('click', () => {
    let expanded = burgerMenuBtn.getAttribute('aria-expanded') === 'true';
    burgerMenuBtn.setAttribute('aria-expanded', !expanded);
    sideMenu.classList.add('main-nav__list-wrap--show');
    showMenu()
  });

  closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('main-nav__list-wrap--show');
    hideMenu();
  });
})();

// Focus trap
(function () {
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', function(evt) {
      let isTabPressed = (evt.key === 'Tab' || evt.keyCode === KEYCODE_TAB);
  
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
  }
  const sideMenu = document.querySelector('.main-nav__list-wrap');
  trapFocus(sideMenu);
})();