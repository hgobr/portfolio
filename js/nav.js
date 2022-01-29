const mainNav = document.querySelector('.mainNav');
const navButton = document.querySelector('.mobileNavButton');

navButton.addEventListener('click', () => {
  const visible = mainNav.getAttribute('dataVisible');
  if (visible === 'false') {
    mainNav.setAttribute('dataVisible', true);
    navButton.setAttribute('aria-expanded', true);
  } else if (visible === 'true') {
    mainNav.setAttribute('dataVisible', false);
    navButton.setAttribute('aria-expanded', false);
  }
});
