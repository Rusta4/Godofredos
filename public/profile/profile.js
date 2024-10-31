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
                const nameElement = document.getElementById('name');
                nameElement.textContent = userDoc.nombre_usuario || "";
                const phoneElement = document.getElementById('phone');
                phoneElement.textContent = userDoc.telefono || "Número no disponible";
                const streetElement = document.getElementById('street');
                streetElement.textContent = userDoc.calle || "Calle no disponible";
                const genderElement = document.getElementById('gender');
                genderElement.textContent = userDoc.genero || "Género no disponible";

                // Manejo de clics en el botón de editar nombre
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
                                await updateDoc(doc(db, 'Usuarios', userId), { nombre_usuario: newName });
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

                // Manejo de clics en el botón de editar teléfono
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
                                await updateDoc(doc(db, 'Usuarios', userId), { telefono: newPhone });
                                const spanElement = document.createElement('span');
                                spanElement.id = 'phone';
                                spanElement.classList.add('editable');
                                spanElement.textContent = newPhone;

                                phoneInputElement.replaceWith(spanElement);
                                editPhoneButton.textContent = '✏️';

                                alert('Número de teléfono cambiado con éxito.');
                            } catch (error) {
                                console.error("Error al cambiar el teléfono: ", error);
                                alert("Ocurrió un error al intentar cambiar el número de teléfono.");
                            }
                        }
                        isEditingPhone = false;
                    }
                });

                // Manejo de clics en el botón de editar calle
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
                                await updateDoc(doc(db, 'Usuarios', userId), { calle: newStreet });
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

                // Manejo de clics en el botón de editar género
                const editGenderButton = document.getElementById('save-gender-btn');
                let isEditingGender = false;
                let genderSelectElement;

                editGenderButton.addEventListener('click', async () => {
                    if (!isEditingGender) {
                        const currentGender = genderElement.textContent;
                        genderSelectElement = document.createElement('select');
                        genderSelectElement.classList.add('editable');

                        ['Hombre', 'Mujer', 'Otros'].forEach(gender => {
                            const option = document.createElement('option');
                            option.value = gender;
                            option.textContent = gender;
                            if (gender === currentGender) {
                                option.selected = true;
                            }
                            genderSelectElement.appendChild(option);
                        });

                        genderElement.replaceWith(genderSelectElement);
                        editGenderButton.textContent = 'Guardar';
                        isEditingGender = true;
                    } else {
                        const newGender = genderSelectElement.value;
                        if (newGender) {
                            try {
                                await updateDoc(doc(db, 'Usuarios', userId), { genero: newGender });
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

                // Cambio de contraseña
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

                        // Vaciar los campos de contraseña
                        document.getElementById('old-password').value = '';
                        document.getElementById('new-password').value = '';
                        document.getElementById('confirm-new-password').value = '';

                    } catch (error) {
                        console.error("Error al cambiar la contraseña: ", error);
                        alert("Ocurrió un error al intentar cambiar la contraseña.");
                    }
                });

                // Eliminar cuenta
                const deleteAccountButton = document.getElementById('delete-account-btn');
                const confirmDeleteButton = document.getElementById('confirm-delete-btn');
                confirmDeleteButton.style.display = 'none'; // Inicialmente ocultar el botón de confirmación

                deleteAccountButton.addEventListener('click', () => {
                    confirmDeleteButton.style.display = 'block'; // Mostrar el botón de confirmación
                });

                // Confirmar eliminación
                confirmDeleteButton.addEventListener('click', async () => {
                    const deletePassword = document.getElementById('delete-password').value;

                    // Asegúrate de que el salt esté disponible y sea correcto
                    if (!userDoc.salt) {
                        alert('No se encontró el salt del usuario.');
                        return;
                    }

                    // Convertir el salt de hexadecimal a Uint8Array
                    const saltUint8Array = hexToUint8Array(userDoc.salt);

                    // Hashear la contraseña introducida por el usuario
                    const hashedDeletePassword = await hashPassword(deletePassword, saltUint8Array);

                    // Comparar la contraseña hasheada con la almacenada en Firestore
                    if (hashedDeletePassword.hash !== userDoc.contraseña) {
                        alert('La contraseña es incorrecta.');
                        return;
                    }

                    // Proceder a eliminar la cuenta
                    try {
                        await deleteDoc(doc(db, 'Usuarios', userId));
                        alert('Cuenta eliminada con éxito.');
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('userEmail');
                        window.location.href = "../index.html"; // Redirige a index.html después de eliminar la cuenta
                    } catch (error) {
                        console.error("Error al eliminar la cuenta: ", error);
                        alert("Ocurrió un error al intentar eliminar la cuenta.");
                    }
                });

            } else {
                alert('Usuario no encontrado.');
            }
        } catch (error) {
            console.error("Error al obtener el usuario: ", error);
            alert('Ocurrió un error al intentar obtener la información del usuario.');
        }
    }
});

// Convertir hexadecimal a Uint8Array
function hexToUint8Array(hex) {
    const byteArray = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        byteArray[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return byteArray;
}

// Función para hashear la contraseña (implementa tu lógica aquí)
async function hashPassword(password, salt) {
    const enc = new TextEncoder();
    const encodedPassword = enc.encode(password);
    
    const hashedBuffer = await crypto.subtle.importKey('raw', encodedPassword, { name: 'PBKDF2' }, false, ['deriveBits', 'deriveKey'])
        .then(key => {
            return crypto.subtle.deriveKey(
                { name: 'PBKDF2', hash: 'SHA-256', iterations: 100000, salt: salt },
                key,
                { name: 'AES-GCM', length: 256 },
                false,
                ['encrypt', 'decrypt']
            );
        });

    const hashedArray = await crypto.subtle.exportKey('raw', hashedBuffer);
    return {
        hash: Array.from(new Uint8Array(hashedArray)).map(b => String.fromCharCode(b)).join(''),
        salt: salt // Devuelves el salt para uso posterior
    };
}
