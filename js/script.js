//---------- transitions ----------

window.onload = () => {
  const transition = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout(() => {
    transition.classList.remove('isActive');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.href;

      transition.classList.add('isActive');

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};

//---------- nav ----------

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

//*---------- notifications ----------

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'bottom',
  },
  types: [
    {
      type: 'success',
      background: '#008ed7',
      duration: 2500,
      dismissible: true,
    },
  ],
});

const copyText = document.querySelector('.copyText input');
const copyBtn = document.querySelector('.copyBtn');
const linkBtn = document.querySelector('.linkBtn');

linkBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyText.value);
  notyf.success('Copié dans le presse-papier');
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyText.value);
  notyf.success('Copié dans le presse-papier');
});
