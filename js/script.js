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
  const body = document.querySelector('body');
  const burgerMenuBtn = document.querySelector('.burger-btn');
  const sideMenu = document.querySelector('.mobile-menu');
  const sideMenuLinks = sideMenu.querySelectorAll('.mobile-menu__link');
  const closeMenuBtn = sideMenu.querySelector('.close-btn');

  let isPageHasScroll = window.innerWidth > document.body.offsetWidth;
  let pageScrollY;
  let vh = window.innerHeight * 0.01;

  const saveScrollPosition = () => {
    if (isPageHasScroll) {
      pageScrollY = window.scrollY;
      document.body.style.top = -pageScrollY + 'px';
    }
  };

  const returnScrollPosition = () => {
    if (isPageHasScroll) {
      window.scrollTo(0, pageScrollY);
    }
  };

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

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
    sideMenu.classList.add('mobile-menu--show');
    body.classList.add('scroll-lock');
    showMenu();
    saveScrollPosition();
  });

  closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('mobile-menu--show');
    body.classList.remove('scroll-lock');
    hideMenu();
    returnScrollPosition();
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
  const sideMenu = document.querySelector('.mobile-menu');
  trapFocus(sideMenu);
})();