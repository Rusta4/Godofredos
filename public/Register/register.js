import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, doc, setDoc, getDoc, collection, query, where, orderBy, limit, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

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
const db = getFirestore(app);

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

// Genera un nuevo ID de usuario
async function generateUserId() {
    const usersRef = collection(db, 'Usuarios');
    const q = query(usersRef, orderBy("id_usuarios", "desc"), limit(1)); // Ordena por id_usuarios en orden descendente y limita a 1
    const querySnapshot = await getDocs(q);
    
    // Si hay documentos, obtiene el mayor id_usuarios y le suma uno
    if (!querySnapshot.empty) {
        const lastUser = querySnapshot.docs[0].data();
        return lastUser.id_usuarios + 1; // Incrementa el último id_usuarios
    } else {
        return 1; // Empieza en 1 si no hay usuarios
    }
}

// Lógica del formulario
document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('create');

    if (taskForm) {
        taskForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = taskForm['task-title'].value;
            const password = taskForm['task-description'].value;
            const confirmPassword = taskForm['confirm-password'].value;

            // Verifica que la contraseña tenga al menos 8 caracteres
            if (password.length < 8) {
                console.error("La contraseña debe tener al menos 8 caracteres.");
                alert("La contraseña debe tener al menos 8 caracteres.");
                return;
            }

            // Verifica si las contraseñas coinciden
            if (password !== confirmPassword) {
                console.error("Las contraseñas no coinciden");
                alert("Las contraseñas no coinciden, por favor, inténtalo de nuevo.");
                return;
            }

            try {
                // Verifica si el usuario ya existe usando una consulta en la colección
                const usersRef = collection(db, 'Usuarios');
                const userQuery = query(usersRef, where("email", "==", email));
                const userSnapshot = await getDocs(userQuery);

                if (!userSnapshot.empty) {
                    console.log('El usuario ya existe');
                    alert("El usuario ya existe, intenta con otro email.");
                    return;
                }

                const userId = await generateUserId(); // Genera un nuevo id_usuarios

                // Generar el hash y el salt de la contraseña
                const { hash: hashedPassword, salt } = await hashPassword(password);

                // Crea una nueva referencia al documento, generando automáticamente un ID
                await addDoc(usersRef, {
                    id_usuarios: userId, // Almacena el id_usuarios como un campo
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
                

                // Redirecciona a la página de inicio de sesión
                window.location.href = "../login/login.html";
            } catch (error) {
                console.error("Error guardando el documento: ", error);
            }
        });
    } else {
        console.error("El formulario con el ID 'create' no fue encontrado.");
    }
});
