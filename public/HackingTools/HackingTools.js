import { getStorage, ref, listAll, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js';
import { firebaseConfig } from '../BBDD/firebaseConf.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';

// authHandler.js
import { auth } from '../BBDD/firebaseConf.js'; // Importa auth desde tu configuración de Firebase
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

// Verifica el estado de la sesión
document.addEventListener('DOMContentLoaded', function () {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Si el usuario está autenticado, muestra el perfil y oculta los enlaces de login y registro
            document.getElementById('profile-container').style.display = 'flex';
            document.getElementById('login-link').style.display = 'none';
            document.getElementById('register-link').style.display = 'none';
        } else {
            // Si el usuario no está autenticado, oculta el perfil y muestra los enlaces de login y registro
            document.getElementById('profile-container').style.display = 'none';
            document.getElementById('login-link').style.display = 'block';
            document.getElementById('register-link').style.display = 'block';
        }
    });
});

// Función para cerrar sesión
export function logout() {
    signOut(auth).then(() => {
        // Recarga la página después de cerrar sesión
        window.location.reload();
    }).catch((error) => {
        console.error("Error al cerrar sesión: ", error);
    });
}






// Inicializar Firebase Storage
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para obtener y mostrar los archivos
async function loadHackingTools() {
    const toolsContainer = document.getElementById('tools-container');
    const folderRef = ref(storage, 'HackingTools'); // Carpeta en Firebase Storage

    try {
        // Listar los archivos en la carpeta
        const folderContents = await listAll(folderRef);

        folderContents.items.forEach(async (itemRef) => {
            const fileURL = await getDownloadURL(itemRef); // URL pública del archivo
            const fileName = itemRef.name.split('.')[0]; // Nombre del archivo sin extensión
            const fileExtension = itemRef.name.split('.').pop(); // Extensión del archivo

            // Genera el bloque de herramienta
            const toolDiv = document.createElement('div');
            toolDiv.classList.add('tool');
            toolDiv.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="${fileName}">
                <h3>${fileName}</h3>
                <p>Descripción para ${fileName}</p>
                <a href="${fileURL}" download="${itemRef.name}">
                    <button>Descargar</button>
                </a>
            `;

            // Inserta el bloque en el contenedor
            toolsContainer.appendChild(toolDiv);
        });
    } catch (error) {
        console.error("Error al cargar herramientas:", error);
    }
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', loadHackingTools);
