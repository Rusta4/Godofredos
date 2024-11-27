import { db } from '../BBDD/firebaseConf.js';
import { collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { getAuth, fetchSignInMethodsForEmail } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

// Inicializa Firebase Auth
const auth = getAuth();

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
                // Crea una referencia al documento del usuario basado en el correo electrónico en Firestore
                const usersRef = collection(db, 'Usuarios');
                const q = query(usersRef, where("email", "==", email));
                const querySnapshot = await getDocs(q);

                // Verifica si el usuario existe en Firestore
                if (querySnapshot.empty) {
                    console.error("El email no está registrado en Firestore.");
                    alert("El Usuario no está registrado. Por favor, intenta con otro email.");
                    return;
                }

                // Obtiene la información del usuario desde Firestore
                const userDoc = querySnapshot.docs[0].data();
                const { salt, contraseña: hashedPassword } = userDoc;

                // Hash de la contraseña ingresada para comparación
                const { hash: hashedInputPassword } = await hashPassword(password, hexToBuffer(salt));

                // Compara las contraseñas
                if (hashedInputPassword === hashedPassword) {
                    console.log('Inicio de sesión exitoso!');

                    // Guarda el estado de inicio de sesión y el correo del usuario en localStorage
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userEmail', email);

                    // Redirecciona a la página principal o perfil
                    window.location.href = "../index.html";  // O "../profile.html" si prefieres que vaya directo al perfil
                } else {
                    console.error("Contraseña incorrecta.");
                    alert("Por favor, inténtalo de nuevo. El Usuario o Contraseña no es correcto");
                }
            } catch (error) {
                console.error("Error durante el inicio de sesión: ", error);
                alert("Ocurrió un error. Inténtalo de nuevo más tarde.");
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
