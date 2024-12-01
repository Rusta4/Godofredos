// Importa los módulos necesarios de Firebase
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { db } from '../BBDD/firebaseConf.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Inicializa Firebase Authentication
const auth = getAuth();

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Cargado"); // Verificación de carga del DOM
    const loginForm = document.getElementById('login');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = loginForm['email'].value;
            const password = loginForm['password'].value;

            try {
                // Intenta iniciar sesión con el correo y la contraseña en Firebase Authentication
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                console.log("UID de usuario desde Firebase Auth:", user.uid);  // Verificar el uid

                // Verifica si el usuario también está registrado en Firestore con el uid
                const userDocRef = doc(db, 'Usuarios', user.uid);  // Usamos el uid como nombre del documento
                const userDoc = await getDoc(userDocRef);

                if (!userDoc.exists()) {
                    console.error("El usuario no existe en Firestore.");
                    alert("Hubo un problema con tu cuenta. Por favor, contacta al soporte.");
                    return;
                }

                console.log("Usuario encontrado en Firestore:", userDoc.data()); // Imprimir los datos del documento

                console.log("Inicio de sesión exitoso.");
                // Redirige a la página principal o al dashboard del usuario
                window.location.href = "../index.html";  // Cambia esta URL a la que necesites

            } catch (error) {
                console.error("Error durante el inicio de sesión: ", error);

                if (error.code === 'auth/user-not-found') {
                    alert("El usuario no existe. Por favor, verifica tu correo.");
                } else if (error.code === 'auth/wrong-password') {
                    alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
                } else {
                    alert("Hubo un error al iniciar sesión. Intenta nuevamente.");
                }
            }
        });
    } else {
        console.error("El formulario con el ID 'login' no fue encontrado.");
    }
});
