// transitions

window.onload = () => {
  const transition = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout(() => {
    transition.classList.remove('isActive');
  }, 250);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget;

      transition.classList.add('isActive');

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
};

// notifications

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
