const copyText = document.querySelector('.copyText');

copyText.querySelector('button').addEventListener('click', function () {
  const input = copyText.querySelector('.input.text');
  input.select();
  document.execCommand('copy');
  copyText.classList.add('active');
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove('active');
  }, 2000);
});
