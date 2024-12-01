import { auth, db } from '../BBDD/firebaseConf.js';
import { doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js';


document.addEventListener('DOMContentLoaded', () => {
    // Verifica si el usuario está autenticado al cargar la página
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            alert("Por favor, inicia sesión primero.");
            window.location.href = "../login.html";
            return;
        }

        // Si el usuario está autenticado, busca al usuario por su UID en la base de datos
        try {
            const userId = user.uid; // Usa el uid del usuario para obtener datos de Firestore
            const userDocRef = doc(db, 'Usuarios', userId); // Obtén el documento del usuario por UID
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userDocData = userDoc.data();

                // Rellena los elementos de la página con la información del usuario
                document.getElementById('email').textContent = user.email || "Email no disponible";
                const nameElement = document.getElementById('name');
                nameElement.textContent = userDocData.nombre_usuario || "Nombre no disponible";
                const phoneElement = document.getElementById('phone');
                phoneElement.textContent = userDocData.telefono || "Número no disponible";
                const streetElement = document.getElementById('street');
                streetElement.textContent = userDocData.calle || "Calle no disponible";
                const genderElement = document.getElementById('gender');
                genderElement.textContent = userDocData.genero || "Género no disponible";

                loadUploadedFiles();
                
                // Función para editar el nombre
                const editNameButton = document.getElementById('save-name-btn');
                let isEditingName = false;
                let nameInputElement;

                editNameButton.addEventListener('click', async () => {
                    if (!isEditingName) {
                        const currentName = nameElement.textContent;
                        nameInputElement = document.createElement('input');
                        nameInputElement.type = 'text';
                        nameInputElement.value = currentName;
                        nameInputElement.classList.add('editable');

                        nameElement.replaceWith(nameInputElement);
                        editNameButton.textContent = 'Guardar';
                        isEditingName = true;
                    } else {
                        const newName = nameInputElement.value;
                        if (newName) {
                            try {
                                // Actualiza el nombre en la base de datos de Firestore
                                await updateDoc(userDocRef, { nombre_usuario: newName });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'name';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newName;

                                nameInputElement.replaceWith(spanElement);
                                editNameButton.textContent = '✏️';

                                alert('Nombre cambiado con éxito.');
                            } catch (error) {
                                console.error("Error al cambiar el nombre: ", error);
                                alert("Ocurrió un error al intentar cambiar el nombre.");
                            }
                        }
                        isEditingName = false;
                    }
                });

                // Función para editar el teléfono
                const editPhoneButton = document.getElementById('save-phone-btn');
                let isEditingPhone = false;
                let phoneInputElement;

                editPhoneButton.addEventListener('click', async () => {
                    if (!isEditingPhone) {
                        const currentPhone = phoneElement.textContent;
                        phoneInputElement = document.createElement('input');
                        phoneInputElement.type = 'text';
                        phoneInputElement.value = currentPhone;
                        phoneInputElement.classList.add('editable');

                        phoneElement.replaceWith(phoneInputElement);
                        editPhoneButton.textContent = 'Guardar';
                        isEditingPhone = true;
                    } else {
                        const newPhone = phoneInputElement.value;
                        if (newPhone) {
                            try {
                                // Actualiza el teléfono en la base de datos de Firestore
                                await updateDoc(userDocRef, { telefono: newPhone });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'phone';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newPhone;

                                phoneInputElement.replaceWith(spanElement);
                                editPhoneButton.textContent = '✏️';

                                alert('Número de teléfono cambiado con éxito.');
                            } catch (error) {
                                console.error("Error al cambiar el teléfono: ", error);
                                alert("Ocurrió un error al intentar cambiar el teléfono.");
                            }
                        }
                        isEditingPhone = false;
                    }
                });

                // Función para editar la calle
                const editStreetButton = document.getElementById('save-street-btn');
                let isEditingStreet = false;
                let streetInputElement;

                editStreetButton.addEventListener('click', async () => {
                    if (!isEditingStreet) {
                        const currentStreet = streetElement.textContent;
                        streetInputElement = document.createElement('input');
                        streetInputElement.type = 'text';
                        streetInputElement.value = currentStreet;
                        streetInputElement.classList.add('editable');

                        streetElement.replaceWith(streetInputElement);
                        editStreetButton.textContent = 'Guardar';
                        isEditingStreet = true;
                    } else {
                        const newStreet = streetInputElement.value;
                        if (newStreet) {
                            try {
                                // Actualiza la calle en la base de datos de Firestore
                                await updateDoc(userDocRef, { calle: newStreet });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'street';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newStreet;

                                streetInputElement.replaceWith(spanElement);
                                editStreetButton.textContent = '✏️';

                                alert('Calle cambiada con éxito.');
                            } catch (error) {
                                console.error("Error al cambiar la calle: ", error);
                                alert("Ocurrió un error al intentar cambiar la calle.");
                            }
                        }
                        isEditingStreet = false;
                    }
                });

                // Función para editar el género
                const editGenderButton = document.getElementById('save-gender-btn');
                let isEditingGender = false;
                let genderSelectElement;

                editGenderButton.addEventListener('click', async () => {
                    if (!isEditingGender) {
                        const currentGender = genderElement.textContent;
                        genderSelectElement = document.createElement('select');
                        const options = ['Masculino', 'Femenino', 'Otro'];
                        options.forEach(option => {
                            const optionElement = document.createElement('option');
                            optionElement.value = option;
                            optionElement.textContent = option;
                            if (option === currentGender) {
                                optionElement.selected = true;
                            }
                            genderSelectElement.appendChild(optionElement);
                        });

                        genderElement.replaceWith(genderSelectElement);
                        editGenderButton.textContent = 'Guardar';
                        isEditingGender = true;
                    } else {
                        const newGender = genderSelectElement.value;
                        if (newGender) {
                            try {
                                // Actualiza el género en la base de datos de Firestore
                                await updateDoc(userDocRef, { genero: newGender });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'gender';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newGender;

                                genderSelectElement.replaceWith(spanElement);
                                editGenderButton.textContent = '✏️';

                                alert('Género cambiado con éxito.');
                            } catch (error) {
                                console.error("Error al cambiar el género: ", error);
                                alert("Ocurrió un error al intentar cambiar el género.");
                            }
                        }
                        isEditingGender = false;
                    }
                });

            } else {
                alert("No se encontraron datos para este usuario.");
                window.location.href = "../index.html";
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario: ", error);
            alert("Ocurrió un error al cargar los datos del usuario.");
        }
    });


    document.getElementById('upload-btn').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        console.log(file); // Verifica que el archivo se seleccionó
        if (!file) return;
    
        const userId = auth.currentUser.uid;
        const storage = getStorage();
        const userFolderRef = ref(storage, `uploads/${userId}`);
        const fileRef = ref(userFolderRef, file.name);
    
        try {
            console.log("Iniciando subida...");
            const uploadTask = uploadBytesResumable(fileRef, file);
    
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Puedes agregar aquí un manejador de progreso si lo deseas
                    console.log("Subiendo archivo...");
                },
                (error) => {
                    console.error("Error al subir el archivo: ", error);
                    alert("Ocurrió un error al subir el archivo.");
                },
                async () => {
                    const fileURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log("Archivo subido con éxito. URL: ", fileURL);
                    alert('Archivo subido con éxito. URL: ' + fileURL);
    
                    const uploadedFilesContainer = document.getElementById('uploaded-files-container');
                    const fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    fileLink.textContent = file.name;
                    uploadedFilesContainer.appendChild(fileLink);
                }
            );
        } catch (error) {
            console.error("Error al subir el archivo: ", error);
            alert("Ocurrió un error al intentar subir el archivo.");
        }
    });




    // Función para eliminar un archivo
    async function deleteFile(fileName) {
        const userId = auth.currentUser.uid;
        const storage = getStorage();

        // Referencia al archivo a eliminar
        const fileRef = ref(storage, `uploads/${userId}/${fileName}`);

        try {
            // Eliminar el archivo
            await deleteObject(fileRef);
            alert('Archivo eliminado con éxito.');
            // Eliminar el archivo de la interfaz
            const fileElement = document.getElementById(fileName);
            fileElement.remove();
        } catch (error) {
            console.error("Error al eliminar el archivo: ", error);
            alert("Ocurrió un error al intentar eliminar el archivo.");
        }
    }

    // Agregar evento de clic para eliminar un archivo
    document.querySelectorAll('.delete-file-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            const fileName = e.target.dataset.fileName;
            deleteFile(fileName);
        });
    });


    async function loadUploadedFiles() {
        const userId = auth.currentUser.uid;  // Asegúrate de que el UID esté bien
        const storage = getStorage();
        const userFolderRef = ref(storage, `uploads/${userId}`); // Referencia correcta
    
        try {
            console.log("Buscando archivos en: uploads/" + userId);  // Verificar el path
            const folderContents = await listAll(userFolderRef);
    
            if (folderContents.items.length === 0) {
                console.log("No se encontraron archivos en la carpeta del usuario.");
                alert("No tienes archivos subidos.");
            }
    
            const uploadedFilesContainer = document.getElementById('uploaded-files-container');
            uploadedFilesContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar los archivos
    
            folderContents.items.forEach(async (itemRef) => {
                const fileURL = await getDownloadURL(itemRef);
                const fileName = itemRef.name;
    
                // Crear un enlace para el archivo
                const fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.textContent = fileName;
                fileLink.id = fileName;
    
                // Botón para eliminar el archivo
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.classList.add('delete-file-btn');
                deleteButton.dataset.fileName = fileName;
    
                // Agregar el archivo y el botón de eliminación al contenedor
                const fileDiv = document.createElement('div');
                fileDiv.appendChild(fileLink);
                fileDiv.appendChild(deleteButton);
                uploadedFilesContainer.appendChild(fileDiv);
            });
        } catch (error) {
            console.error("Error al cargar los archivos:", error);
            alert("Ocurrió un error al cargar los archivos.");
        }
    }
    
});

// Función para volver al menú
document.getElementById('back-to-menu-btn').addEventListener('click', () => {
    window.location.href = "../index.html";
});
