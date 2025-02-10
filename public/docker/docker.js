// Función para desplegar el contenedor
document.getElementById("deploy-btn").addEventListener("click", function () {
    // Llama al endpoint para crear el contenedor
    fetch("http://localhost:3000/deploy-container", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: "mcr.microsoft.com/windows/servercore:ltsc2022" }) // Cambia la imagen según sea necesario
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Contenedor creado") {
            alert("Contenedor creado con éxito.");
            // Aquí podrías agregar más lógica si quieres mostrar el contenedor o detalles adicionales.
        } else {
            alert("Hubo un error al crear el contenedor.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al crear el contenedor.");
    });
});

// Función para detener y eliminar el contenedor
document.getElementById("stop-btn").addEventListener("click", function () {
    fetch('http://localhost:3000/stop-container', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ containerName: "windows10-container" })  // El nombre del contenedor
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Contenedor detenido y eliminado') {
            alert("El contenedor se ha detenido y eliminado correctamente.");
        } else {
            alert("Hubo un error al detener el contenedor.");
        }
    })
    .catch(error => {
        console.error("Error al detener el contenedor:", error);
        alert("Hubo un error al detener el contenedor.");
    });
});
