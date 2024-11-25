/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card__product'),
      modalClose = document.querySelectorAll('.modal__close'),
      modalCard = document.querySelectorAll('.modal__card');

let activeModal = (modalClick) =>{
   modal[modalClick].classList.add('active-modal');
}

/* Show modal */
cardBtn.forEach((cardBtn, i) =>{
   cardBtn.addEventListener('click', () =>{
      activeModal(i);
   });
});

/* Hide modal */
modalClose.forEach((modalClose) =>{
   modalClose.addEventListener('click', () => {
       modal.forEach((modalRemove) => {
           modalRemove.classList.remove('active-modal');
       });
   });
});

/* Hide modal on background click */
modal.forEach((modal) =>{
   modal.addEventListener('click', () =>{
      modal.classList.remove('active-modal');
   });
});

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) =>{
   modalCard.addEventListener('click', (e) =>{
      e.stopPropagation();
   });
});



// Obtener los elementos del DOM
const hamburgerMenu = document.getElementById('hamburger-menu');
const lateralMenu = document.getElementById('menu-lateral');
const closeBtn = document.getElementById('close-btn');

// Función para abrir el menú lateral
hamburgerMenu.addEventListener('click', () => {
  lateralMenu.style.right = '0'; // Mostrar el menú lateral
  document.body.style.overflow = 'hidden'; // Evitar scroll al abrir el menú
  toggleHamburger(); // Activar animación de hamburguesa
});

// Función para cerrar el menú lateral
closeBtn.addEventListener('click', () => {
  lateralMenu.style.right = '-250px'; // Ocultar el menú lateral
  document.body.style.overflow = 'auto'; // Habilitar scroll
  toggleHamburger(); // Revertir animación de hamburguesa
});

// Función para animar el botón hamburguesa
function toggleHamburger() {
  const lines = hamburgerMenu.querySelectorAll('.linea');
  lines[0].classList.toggle('transform1'); // Animación de primera línea
  lines[1].classList.toggle('transform2'); // Animación de segunda línea
  lines[2].classList.toggle('transform3'); // Animación de tercera línea
}
