// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARcCiDcOJE4PSJQEE-RyLGr43P8QnMeoI",
    authDomain: "godofredo-a880f.firebaseapp.com",
    databaseURL: "https://godofredo-a880f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "godofredo-a880f",
    storageBucket: "godofredo-a880f.appspot.com",
    messagingSenderId: "679438036638",
    appId: "1:679438036638:web:8759dc32e09ed956b9d58f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtiene la instancia de autenticación

export { auth }; // Exporta la instancia de autenticación


// forgotPassword.js
import { auth } from './firebase.js'; // Importa la instancia de autenticación
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
