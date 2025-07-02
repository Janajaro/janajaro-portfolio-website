// Přepínání viditelnosti "whoIsDIs"
document.querySelector('#btn-whodis').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area');
  const button = document.querySelector('#btn-whodis');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('purple');
});

// Přepínání viditelnosti "contact"
document.querySelector('#btn-contact').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area-contact');
  const button = document.querySelector('#btn-contact');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('orange');
});
// Přepínání viditelnosti "works"
document.querySelector('#btn-works').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area-works');
  const button = document.querySelector('#btn-works');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('green');
});
// Přepínání viditelnosti "exhibitions"
document.querySelector('#btn-exhibitions').addEventListener('click', () => {
  const txtArea = document.querySelector('.txt-area-exhibitions');
  const button = document.querySelector('#btn-exhibitions');

  txtArea.classList.toggle('hidden');

  button.classList.toggle('yellow');
});
