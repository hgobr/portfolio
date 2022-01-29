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
