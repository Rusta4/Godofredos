import { getStorage, ref, listAll, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js';
import { firebaseConfig } from '../BBDD/firebaseConf.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';

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
