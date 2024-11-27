import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { firebaseConfig } from '../BBDD/firebaseConf.js'; // Asegúrate de que la ruta sea correcta

// Inicializa Firebase
const auth = getAuth();

// Selección del formulario
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value.trim();

    if (!email) {
        alert('Por favor, introduce tu correo electrónico.');
        return;
    }

    // Verificar si el correo es válido (opcional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    try {
        // Enviar el correo de restablecimiento
        console.log("Enviando correo de restablecimiento a: " + email); // Depuración

        await sendPasswordResetEmail(auth, email);

        console.log("Correo de restablecimiento enviado con éxito"); // Depuración
        alert('Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico.');
        window.location.href = './login.html';  // Redirige al login después de enviar el correo
    } catch (error) {
        console.error('Error al enviar el correo de restablecimiento:', error);

        if (error.code === 'auth/user-not-found') {
            alert('El correo electrónico no está registrado en el sistema.');
        } else {
            alert('Ocurrió un error al intentar enviar el correo. Inténtalo de nuevo más tarde.');
        }
    }
});
