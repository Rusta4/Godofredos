// archivo principal
import { db } from '../BBDD/firebaseConf.js';
import { collection, addDoc, query, where, orderBy, limit, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

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

// Genera un nuevo ID de usuario
async function generateUserId() {
    const usersRef = collection(db, 'Usuarios');
    const q = query(usersRef, orderBy("id_usuarios", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        const lastUser = querySnapshot.docs[0].data();
        return lastUser.id_usuarios + 1;
    } else {
        return 1;
    }
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
                const usersRef = collection(db, 'Usuarios');
                const userQuery = query(usersRef, where("email", "==", email));
                const userSnapshot = await getDocs(userQuery);

                if (!userSnapshot.empty) {
                    console.log('El usuario ya existe');
                    alert("El usuario ya existe, intenta con otro email.");
                    return;
                }

                const userId = await generateUserId();
                const { hash: hashedPassword, salt } = await hashPassword(password);

                await addDoc(usersRef, {
                    id_usuarios: userId,
                    contraseña: hashedPassword,
                    salt: salt,
                    email: email,
                    estado_cuenta: true,
                    fecha_creacion: new Date(),
                    nombre_usuario: email.split('@')[0],
                    proyectos_asociados: [],
                    rol: "usuario"
                });

                console.log('Cuenta creada con éxito!');
                window.location.href = "../login/login.html";
            } catch (error) {
                console.error("Error guardando el documento: ", error);
            }
        });
    } else {
        console.error("El formulario con el ID 'create' no fue encontrado.");
    }
});
