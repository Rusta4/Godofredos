import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Configuración de Firebase (reutiliza tu configuración)
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
const db = getFirestore(app);
const auth = getAuth(app); // Inicializa Firebase Auth

// Función para generar un hash de la contraseña usando la API Crypto
async function hashPassword(password, salt = crypto.getRandomValues(new Uint8Array(16))) {
    const encoder = new TextEncoder();
    const passwordKey = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256"
        },
        passwordKey,
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt"]
    );

    const hashBuffer = await crypto.subtle.exportKey("raw", key);
    return { hash: bufferToHex(hashBuffer), salt: bufferToHex(salt) };
}

// Convierte un ArrayBuffer a un string en formato hexadecimal
function bufferToHex(buffer) {
    return [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Lógica del inicio de sesión
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = loginForm['email'].value;
            const password = loginForm['password'].value;

            try {
                // Crea una referencia al documento del usuario basado en el correo electrónico
                const usersRef = collection(db, 'Usuarios');
                const q = query(usersRef, where("email", "==", email));
                const querySnapshot = await getDocs(q);

                // Verifica si el usuario existe
                if (querySnapshot.empty) {
                    console.error("El email no está registrado.");
                    alert("Por favor, inténtalo de nuevo. El Usuario o Contraseña no es correcto");
                    return;
                }

                // Obtiene la información del usuario
                const userDoc = querySnapshot.docs[0].data();
                const { salt, contraseña: hashedPassword } = userDoc;

                // Hash de la contraseña ingresada para comparación
                const { hash: hashedInputPassword } = await hashPassword(password, hexToBuffer(salt));

                // Compara las contraseñas
                if (hashedInputPassword === hashedPassword) {
                    console.log('Inicio de sesión exitoso!');

                    // Aquí se guarda el estado de inicio de sesión en localStorage
                    localStorage.setItem('isLoggedIn', 'true');

                    // Redirecciona a la página principal
                    window.location.href = "../index.html";
                } else {
                    console.error("Contraseña incorrecta.");
                    alert("Por favor, inténtalo de nuevo. El Usuario o Contraseña no es correcto");
                }
            } catch (error) {
                console.error("Error durante el inicio de sesión: ", error);
            }
        });
    } else {
        console.error("El formulario con el ID 'login' no fue encontrado.");
    }
});

// Convierte un string hexadecimal a un ArrayBuffer
function hexToBuffer(hex) {
    const arr = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        arr[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return arr.buffer;
}

// Función para enviar el correo de restablecimiento de contraseña
async function sendPasswordReset() {
    const email = document.querySelector('input[name="email"]').value;

    if (!email) {
        alert('Por favor, introduce tu correo electrónico.');
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        alert('Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico.');
    } catch (error) {
        console.error("Error al enviar el correo de restablecimiento: ", error);
        alert('Ocurrió un error al intentar enviar el correo. Inténtalo de nuevo más tarde.');
    }
}

// Lógica del cierre de formulario
function closeLoginForm() {
    window.location.href = '../index.html';
}
