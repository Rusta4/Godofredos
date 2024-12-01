// Importa los módulos necesarios de Firebase a 
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { db } from '../BBDD/firebaseConf.js'; 
import { doc, setDoc, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';  // Asegúrate de importar todas las funciones necesarias de Firestore

// Inicializa Firebase Authentication
const auth = getAuth();

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
                // Verifica si el usuario ya existe en Firestore
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

                // Ahora guarda los datos del usuario en Firestore, utilizando el uid como nombre de documento
                await setDoc(doc(db, 'Usuarios', user.uid), {
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
                console.error("Error al crear el usuario o guardar el documento: ", error);
                alert("Hubo un error al crear la cuenta. Intenta nuevamente.");
            }
        });
    } else {
        console.error("El formulario con el ID 'create' no fue encontrado.");
    }
});
