import { db } from '../BBDD/firebaseConf.js';
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', async () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
        alert("Por favor, inicia sesión primero.");
        window.location.href = "../login.html";
        return;
    }

    const email = localStorage.getItem('userEmail'); 
    if (email) {
        try {
            const usersRef = collection(db, 'Usuarios');
            const q = query(usersRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0].data();
                const userId = querySnapshot.docs[0].id; 

                document.getElementById('email').textContent = userDoc.email || "Email no disponible";
                document.getElementById('name').value = userDoc.nombre_usuario || "";

                document.getElementById('save-name-btn').addEventListener('click', async () => {
                    const newName = document.getElementById('name').value;
                    if (newName) {
                        await updateDoc(doc(db, 'Usuarios', userId), { nombre_usuario: newName });
                        alert('Nombre cambiado con éxito.');
                    }
                });

                document.getElementById('change-password-btn').addEventListener('click', async () => {
                    const oldPassword = document.getElementById('old-password').value;
                    const newPassword = document.getElementById('new-password').value;
                    const confirmNewPassword = document.getElementById('confirm-new-password').value;

                    if (newPassword !== confirmNewPassword) {
                        alert('Las nuevas contraseñas no coinciden.');
                        return;
                    }

                    // Convertir el salt de hexadecimal a Uint8Array
                    const saltUint8Array = hexToUint8Array(userDoc.salt);

                    // Verificar la contraseña antigua
                    const hashedOldPassword = await hashPassword(oldPassword, saltUint8Array);
                    if (hashedOldPassword.hash !== userDoc.contraseña) {
                        alert('La contraseña antigua es incorrecta.');
                        return;
                    }

                    // Generar hash para la nueva contraseña
                    const { hash: newHashedPassword, salt: newSalt } = await hashPassword(newPassword);
                    try {
                        await updateDoc(doc(db, 'Usuarios', userId), { contraseña: newHashedPassword, salt: newSalt });
                        alert('Contraseña cambiada con éxito.');
                    } catch (error) {
                        console.error("Error al cambiar la contraseña: ", error);
                        alert("Ocurrió un error al intentar cambiar la contraseña.");
                    }
                });

                document.getElementById('delete-account-btn').addEventListener('click', async () => {
                    const confirmation = confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.");
                    if (confirmation) {
                        const password = prompt("Introduce tu contraseña para confirmar la eliminación:");

                        // Convertir el salt de hexadecimal a Uint8Array
                        const saltUint8Array = hexToUint8Array(userDoc.salt); 

                        // Encriptar la contraseña ingresada por el usuario
                        const hashedPassword = await hashPassword(password, saltUint8Array);
                        
                        // Comparar la contraseña encriptada con la que está en la base de datos
                        if (hashedPassword.hash === userDoc.contraseña) {
                            try {
                                await deleteDoc(doc(db, 'Usuarios', userId));
                                alert('Cuenta eliminada con éxito.');
                                localStorage.removeItem('isLoggedIn');
                                localStorage.removeItem('userEmail');
                                window.location.href = "../index.html"; // Redirigir a index.html
                            } catch (error) {
                                console.error("Error al eliminar la cuenta: ", error);
                                alert("Ocurrió un error al intentar eliminar la cuenta.");
                            }
                        } else {
                            alert('Contraseña incorrecta. No se puede eliminar la cuenta.');
                        }
                    }
                });
            } else {
                console.error("Usuario no encontrado.");
                alert("No se encontró información del usuario.");
            }
        } catch (error) {
            console.error("Error al obtener datos del usuario: ", error);
            alert("Ocurrió un error al intentar cargar los datos del usuario.");
        }
    } else {
        console.error("No se encontró el correo electrónico en localStorage.");
    }
});

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

// Convierte un string hexadecimal a un Uint8Array
function hexToUint8Array(hex) {
    const arrayBuffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        arrayBuffer[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return arrayBuffer;
}
