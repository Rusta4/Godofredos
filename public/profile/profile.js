import { auth } from '../BBDD/firebaseConf.js';
import { db } from '../BBDD/firebaseConf.js';
import { doc, getDoc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { onAuthStateChanged, updatePassword, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

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

                // Función para editar el nombre
                const editNameButton = document.getElementById('save-name-btn');
                let isEditingName = false;
                let nameInputElement;

                editNameButton.addEventListener('click', async () => {
                    const nameElement = document.getElementById('name');

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
                                await updateDoc(userDocRef, { telefono: newPhone });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'phone';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newPhone;

                                phoneInputElement.replaceWith(spanElement);
                                editPhoneButton.textContent = '✏️';

                                alert('Teléfono cambiado con éxito.');
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
                let genderInputElement;

                editGenderButton.addEventListener('click', async () => {
                    if (!isEditingGender) {
                        const currentGender = genderElement.textContent;
                        genderInputElement = document.createElement('select');
                        const genders = ['Masculino', 'Femenino', 'Otro'];
                        genders.forEach(gender => {
                            const option = document.createElement('option');
                            option.value = gender;
                            option.textContent = gender;
                            if (gender === currentGender) {
                                option.selected = true;
                            }
                            genderInputElement.appendChild(option);
                        });

                        genderElement.replaceWith(genderInputElement);
                        editGenderButton.textContent = 'Guardar';
                        isEditingGender = true;
                    } else {
                        const newGender = genderInputElement.value;
                        if (newGender) {
                            try {
                                await updateDoc(userDocRef, { genero: newGender });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'gender';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newGender;

                                genderInputElement.replaceWith(spanElement);
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

                // Función para eliminar cuenta
                const deleteAccountButton = document.getElementById('delete-account-btn');
                const deleteModal = document.getElementById('delete-modal');
                const cancelDeleteButton = document.getElementById('cancel-delete-btn');
                const confirmDeleteButton = document.getElementById('confirm-delete-btn');
                const deletePasswordInput = document.getElementById('delete-password');

                deleteAccountButton.addEventListener('click', () => {
                    // Muestra el modal para confirmar eliminación
                    deleteModal.style.display = 'block';
                });

                cancelDeleteButton.addEventListener('click', () => {
                    // Cierra el modal sin eliminar nada
                    deleteModal.style.display = 'none';
                });

                confirmDeleteButton.addEventListener('click', async () => {
                    const deletePassword = deletePasswordInput.value;

                    // Verifica que la contraseña de eliminación sea correcta
                    const credential = EmailAuthProvider.credential(user.email, deletePassword);
                    try {
                        // Reautentica al usuario con la contraseña proporcionada
                        await reauthenticateWithCredential(user, credential);

                        // Elimina el usuario de Firestore
                        await deleteDoc(userDocRef);

                        // Elimina el usuario de Firebase Authentication
                        await deleteUser(user);

                        alert('Cuenta eliminada con éxito.');

                        // Elimina los datos de autenticación local
                        localStorage.removeItem('isLoggedIn');
                        window.location.href = "../index.html";  // Redirige a la página principal
                    } catch (error) {
                        console.error("Error al eliminar la cuenta: ", error);
                        alert("La contraseña es incorrecta o hubo un error al intentar eliminar la cuenta.");
                    }

                    deleteModal.style.display = 'none';
                });

                // Cambiar contraseña
                const changePasswordButton = document.getElementById('change-password-btn');
                changePasswordButton.addEventListener('click', async () => {
                    const oldPassword = document.getElementById('old-password').value;  // Contraseña antigua
                    const newPassword = document.getElementById('new-password').value;  // Nueva contraseña
                    const confirmNewPassword = document.getElementById('confirm-new-password').value;  // Confirmación nueva contraseña

                    // Verifica si las contraseñas nuevas coinciden
                    if (newPassword !== confirmNewPassword) {
                        alert("Las nuevas contraseñas no coinciden.");
                        return;
                    }

                    // Verifica si la contraseña antigua es correcta
                    const credential = EmailAuthProvider.credential(user.email, oldPassword);
                    try {
                        // Reautentica al usuario
                        await reauthenticateWithCredential(user, credential);

                        // Cambia la contraseña
                        await updatePassword(user, newPassword);
                        alert("Contraseña cambiada con éxito.");
                    } catch (error) {
                        console.error("Error al cambiar la contraseña: ", error);
                        if (error.code === 'auth/wrong-password') {
                            alert("La contraseña antigua es incorrecta.");
                        } else {
                            alert("Ocurrió un error al intentar cambiar la contraseña.");
                        }
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
});

// Función para volver al menú
document.getElementById('back-to-menu-btn').addEventListener('click', () => {
    window.location.href = "../index.html";
});
