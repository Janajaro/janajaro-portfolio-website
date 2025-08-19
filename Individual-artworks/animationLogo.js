/* funkce animace elm logo */

const logo = document.querySelector('.JJ-logo');
/*kvůli možnosti ukládní zpětného lomítka v poli přidána modifikace prettier v settings.json*/
const images = [
  '../img/janajaro_logotyp/JJ01.PNG',
  '../img/janajaro_logotyp/JJ02.PNG',
  '../img/janajaro_logotyp/JJ03.PNG',
  '../img/janajaro_logotyp/JJ04.PNG',
];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  logo.src = images[index];
}, 150);