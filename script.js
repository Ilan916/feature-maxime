document.addEventListener('mousemove', function(e) {
  const coordX = document.getElementById('coordX');
  const coordY = document.getElementById('coordY');
  const horizontalLine = document.getElementById('horizontalLine');
  const verticalLine = document.getElementById('verticalLine');
  const borderTop = document.getElementById('borderTop');
  const borderRight = document.getElementById('borderRight');

  let posX = e.clientX;
  let posY = e.clientY;

  // Les lignes suivent la souris, mais restent à l'intérieur des bordures
  horizontalLine.style.top = `${posY}px`;
  verticalLine.style.left = `${posX}px`;

  // Assurez-vous que les coordonnées X ne dépassent pas les bordures verticales
  if (posX > window.innerWidth - borderRight.offsetWidth) {
    posX = window.innerWidth - borderRight.offsetWidth;
  }

  // Assurez-vous que les coordonnées Y ne dépassent pas les bordures horizontales
  if (posY > window.innerHeight - borderTop.offsetHeight) {
    posY = window.innerHeight - borderTop.offsetHeight;
  }

  // Mettez à jour le contenu des divs de coordonnées
  coordX.textContent = `X: ${e.clientX}`;
  coordY.textContent = `Y: ${e.clientY}`;

  // Positionnez les divs de coordonnées pour qu'elles suivent les bords intérieurs des bandes blanches
  coordX.style.left = `${posX}px`;
  coordX.style.top = `0px`; // Aligné avec le bord intérieur de la bande supérieure

  coordY.style.top = `${posY}px`;
  coordY.style.left = `0px`; // Aligné avec le bord intérieur de la bande gauche

  const coordXBottom = document.getElementById('coordXBottom');
  const coordYRight = document.getElementById('coordYRight');

  // Calcul de la position pour coordXBottom pour qu'il suive la ligne horizontale
  // et reste fixé en bas à l'intérieur de la bande blanche
  let bottomXPosition = e.clientX;
  if (bottomXPosition > window.innerWidth - 20) { // Assure que le carré ne dépasse pas la bande verticale droite
    bottomXPosition = window.innerWidth - 20;
  }

  // Calcul de la position pour coordYRight pour qu'il suive la ligne verticale
  // et reste fixé à droite à l'intérieur de la bande blanche
  let rightYPosition = e.clientY;
  if (rightYPosition > window.innerHeight - 20) { // Assure que le carré ne dépasse pas la bande horizontale basse
    rightYPosition = window.innerHeight - 20;
  }

  // Mettez à jour les positions. Les éléments sont positionnés en bas et à droite, donc on utilise
  // les propriétés 'right' et 'bottom' pour les ajuster relativement à ces bords
  coordXBottom.style.right = `${window.innerWidth - bottomXPosition - 20}px`; // Le '- 20' compense la largeur de la bande
  coordXBottom.style.bottom = '0px'; // Toujours au bord inférieur

  coordYRight.style.bottom = `${window.innerHeight - e.clientY - 12}px`; // Ajusté pour l'affichage vertical
  coordYRight.textContent = `Y: ${e.clientY}`;

  // Mettez à jour le contenu des divs de coordonnées avec les positions actuelles de la souris
  coordXBottom.textContent = `X: ${e.clientX}`;
  coordYRight.textContent = `Y: ${e.clientY}`;
});
