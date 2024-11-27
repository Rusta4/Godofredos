// Importa los módulos necesarios
import { db } from '../BBDD/firebaseConf.js';
import { collection, addDoc, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

// Inicializa Firebase Authentication
const auth = getAuth();

// Función para generar un hash de la contraseña usando la API Crypto
async function hashPassword(password, salt = window.crypto.getRandomValues(new Uint8Array(16))) {
    const encoder = new TextEncoder();
    const passwordKey = await window.crypto.subtle.importKey(
        "raw", 
        encoder.encode(password), 
        { name: "PBKDF2" }, 
        false, 
        ["deriveKey"]
    );

    const key = await window.crypto.subtle.deriveKey(
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

    const hashBuffer = await window.crypto.subtle.exportKey("raw", key);
    return { hash: bufferToHex(hashBuffer), salt: bufferToHex(salt) };
}

// Convierte un ArrayBuffer a un string en formato hexadecimal
function bufferToHex(buffer) {
    return [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Lógica del formulario
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Cargado"); // Verificación de carga del DOM
    const taskForm = document.getElementById('create');

    if (taskForm) {
        taskForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = taskForm['task-title'].value;
            const password = taskForm['task-description'].value;
            const confirmPassword = taskForm['confirm-password'].value;

            if (password.length < 8) {
                console.error("La contraseña debe tener al menos 8 caracteres.");
                alert("La contraseña debe tener al menos 8 caracteres.");
                return;
            }

            if (password !== confirmPassword) {
                console.error("Las contraseñas no coinciden");
                alert("Las contraseñas no coinciden, por favor, inténtalo de nuevo.");
                return;
            }

            try {
                // Verifica si el usuario ya existe en Authentication
                const userQuery = query(collection(db, 'Usuarios'), where("email", "==", email));
                const userSnapshot = await getDocs(userQuery);

                if (!userSnapshot.empty) {
                    console.log('El usuario ya existe');
                    alert("El usuario ya existe, intenta con otro email.");
                    return;
                }

                // Crear el usuario en Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                const { hash: hashedPassword, salt } = await hashPassword(password);

                // Ahora guarda los datos adicionales en Firestore usando el uid de Firebase Authentication
                await addDoc(collection(db, 'Usuarios'), {
                    id_usuarios: user.uid,  // Usar el uid del usuario de Firebase Authentication
                    email: email,
                    contraseña: hashedPassword,  // Almacena el hash de la contraseña
                    salt: salt,
                    estado_cuenta: true,
                    fecha_creacion: new Date(),
                    nombre_usuario: email.split('@')[0],
                    proyectos_asociados: [],
                    rol: "usuario"
                });

                console.log('Cuenta creada con éxito!');
                window.location.href = "../login/login.html";
            } catch (error) {
                console.error("Error al crear el usuario o guardar el documento: ", error);
                alert("Hubo un error al crear la cuenta. Intenta nuevamente.");
            }
        });
    } else {
        console.error("El formulario con el ID 'create' no fue encontrado.");
    }
});
