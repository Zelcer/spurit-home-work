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