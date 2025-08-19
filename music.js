// Přepínání viditelnosti "levag"
document.querySelector('#btn-levag').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area');
  const button = document.querySelector('#btn-levag');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('purple');
});

// Přepínání viditelnosti "ccp"
document.querySelector('#btn-ccp').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area-ccp');
  const button = document.querySelector('#btn-ccp');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('orange');
});
// Přepínání viditelnosti "svabky"
document.querySelector('#btn-svabky').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area-svabky');
  const button = document.querySelector('#btn-svabky');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('green');
});
// Přepínání viditelnosti "solo"
document.querySelector('#btn-solo').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area-solo');
  const button = document.querySelector('#btn-solo');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('yellow');
});
