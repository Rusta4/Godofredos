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

            // Opcional: guardar información del usuario en localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', user.displayName); // Asume que tienes displayName en el usuario
            localStorage.setItem('email', user.email); // Asume que tienes el email en el usuario
        } else {
            // Si el usuario no está autenticado, oculta el perfil y muestra los enlaces de login y registro
            document.getElementById('profile-container').style.display = 'none';
            document.getElementById('login-link').style.display = 'block';
            document.getElementById('register-link').style.display = 'block';

            // Opcional: limpiar la información de sesión en localStorage
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
        }
    });
});

// Función para cerrar sesión
export function logout() {
    signOut(auth).then(() => {
        // Recarga la página después de cerrar sesión
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.reload();
    }).catch((error) => {
        console.error("Error al cerrar sesión: ", error);
    });
}

// Función para manejar el clic en "Desplegar"
document.getElementById('deploy-btn').addEventListener('click', function() {
    const user = auth.currentUser; // Verifica el estado de autenticación de Firebase

    if (user) {
        // Si está logueado, obtenemos la información del usuario
        const username = user.displayName; // Obtén el nombre de usuario
        const email = user.email; // Obtén el email

        // Enviar una solicitud a un servidor para desplegar Docker
        fetch('https://your-backend-api.com/deploy-docker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Servidor desplegado con éxito.');
            } else {
                alert('Hubo un error al desplegar el servidor.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al realizar la solicitud.');
        });
    } else {
        alert('Por favor, inicie sesión para desplegar el servidor.');
        window.location.href = '../login/login.html'; // Redirige a la página de login si no está logueado
    }
});

// Función para observar elementos en el viewport
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});
