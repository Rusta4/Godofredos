// firebaseConf.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword ,sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'; // Corregido aquí
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js';

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

// Exporta los servicios necesarios
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { firebaseConfig, auth, db, storage, sendPasswordResetEmail, createUserWithEmailAndPassword };
