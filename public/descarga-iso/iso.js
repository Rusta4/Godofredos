import { auth } from '../BBDD/firebaseConf.js'; // Importa auth desde tu configuración de Firebase
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
    // Verifica el estado de la sesión
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Si el usuario está autenticado, muestra el perfil y oculta los enlaces de login y registro
            document.getElementById('profile-container').style.display = 'flex';
            document.getElementById('login-link').style.display = 'none';
            document.getElementById('register-link').style.display = 'none';
        } else {
            // Si el usuario no está autenticado, oculta el perfil y muestra los enlaces de login y registro
            document.getElementById('profile-container').style.display = 'none';
            document.getElementById('login-link').style.display = 'block';
            document.getElementById('register-link').style.display = 'block';
        }
    });

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

    // Función para cerrar sesión
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            signOut(auth).then(() => {
                // Recarga la página después de cerrar sesión
                window.location.reload();
            }).catch((error) => {
                console.error("Error al cerrar sesión: ", error);
            });
        });
    }
});
