// forgotPassword.js
import { auth } from '../BBDD/firebaseConf'; // Importa la instancia de autenticación
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

export async function sendResetEmail(event) {
    event.preventDefault(); // Evita el comportamiento de envío predeterminado

    const email = document.querySelector('input[name="email"]').value;

    try {
        // Enviar el enlace de restablecimiento de contraseña
        await sendPasswordResetEmail(auth, email);
        alert('Correo de restablecimiento de contraseña enviado. Revisa tu bandeja de entrada.'); // Mensaje de éxito

        window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    } catch (error) {
        alert(error.message); // Mostrar el mensaje de error
    }
}
