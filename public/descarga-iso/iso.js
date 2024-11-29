
document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal__close');
 
    // Abrir modal
    openModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].classList.add('active');
        });
    });
 
    // Cerrar modal
    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].classList.remove('active');
        });
    });
 
    // Cerrar al hacer clic fuera del modal
    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
 });
 
 