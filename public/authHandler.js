// authHandler.js
import { auth } from './BBDD/firebaseConf.js'; // Importa auth desde tu configuración de Firebase
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

// Verifica el estado de la sesión
document.addEventListener('DOMContentLoaded', function () {
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
});

// Función para cerrar sesión
export function logout() {
    signOut(auth).then(() => {
        // Recarga la página después de cerrar sesión
        window.location.reload();
    }).catch((error) => {
        console.error("Error al cerrar sesión: ", error);
    });
}
