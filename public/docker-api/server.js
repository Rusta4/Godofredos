const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para desplegar un contenedor Docker
app.post('/deploy-container', (req, res) => {
    const image = req.body.image || "mcr.microsoft.com/windows/servercore:ltsc2022"; // Usa la imagen que el cliente pase o la predeterminada
    const containerName = "windows10-container";  // Nombre del contenedor

    // Ejecuta el comando Docker para crear el contenedor con la opción --rm (eliminarlo al apagarse)
    exec(`docker run -d --rm --name ${containerName} ${image}`, (err, stdout, stderr) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error al crear el contenedor' });
        }

        if (stderr) {
            console.error('stderr:', stderr);
            return res.status(500).json({ message: 'Error al crear el contenedor' });
        }

        // El contenedor se creó correctamente
        res.status(200).json({ message: 'Contenedor creado', containerId: stdout.trim() });
    });
});

// Endpoint para detener y eliminar un contenedor Docker
app.post('/stop-container', (req, res) => {
    const containerName = req.body.containerName || "windows10-container";  // Usa el nombre del contenedor enviado desde el cliente

    // Ejecuta el comando Docker para detener el contenedor
    exec(`docker stop ${containerName}`, (err, stdout, stderr) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error al detener el contenedor' });
        }

        if (stderr) {
            console.error('stderr:', stderr);
            return res.status(500).json({ message: 'Error al detener el contenedor' });
        }

        // El contenedor se detuvo correctamente
        res.status(200).json({ message: 'Contenedor detenido y eliminado' });
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
