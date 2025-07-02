/* interakce vzdálenosti kurzoru a změny velikosti obrázku */

document.addEventListener('mousemove', (event) => {
  const images = document.querySelectorAll('img:not(.JJ-logo');
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  images.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const imgCenterX = imgRect.left + imgRect.width / 2;
    const imgCenterY = imgRect.top + imgRect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - imgCenterX, 2) + Math.pow(mouseY - imgCenterY, 2),
    );

    const maxDistance = 500; // Lze upravit

    if (distance < maxDistance) {
      const scale = 1 + (1 - distance / maxDistance) * 0.7;
      img.style.transform = `scale(${scale})`;
    } else {
      img.style.transform = 'scale(1)';
    }
  });
});

/* funkce animace elm logo */

const logo = document.querySelector('.JJ-logo');
/*kvůli možnosti ukládní zpětného lomítka v poli přidána modifikace prettier v settings.json*/
const images = [
  'img/janajaro_logotyp/JJ01.PNG',
  'img/janajaro_logotyp/JJ02.PNG',
  'img/janajaro_logotyp/JJ03.PNG',
  'img/janajaro_logotyp/JJ04.PNG',
];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  logo.src = images[index];
}, 150);
