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

    const maxDistance = 400; // Lze upravit

    if (distance < maxDistance) {
      const scale = 1 + (1 - distance / maxDistance) * 1.1;
      img.style.transform = `scale(${scale})`;
    } else {
      img.style.transform = 'scale(1)';
    }
  });
});


