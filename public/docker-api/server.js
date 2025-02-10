const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;
const DOCKER_HOST = "http://10.20.30.100:2375"; // Cambia según sea necesario

app.use(express.json());
app.use(cors()); // Permitir peticiones desde el frontend

// Endpoint para listar imágenes disponibles en Docker
app.get("/images", async (req, res) => {
    try {
        const response = await axios.get(`${DOCKER_HOST}/images/json`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para ejecutar un contenedor
app.post("/run", async (req, res) => {
    try {
        const { image } = req.body;

        // Crear el contenedor
        const containerResponse = await axios.post(`${DOCKER_HOST}/containers/create`, {
            Image: image,
            Cmd: ["/bin/sh"],
            Tty: true
        });

        const containerId = containerResponse.data.Id;

        // Iniciar el contenedor
        await axios.post(`${DOCKER_HOST}/containers/${containerId}/start`);

        res.json({ message: "Contenedor desplegado con éxito", containerId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`API de Docker corriendo en http://0.0.0.0:${PORT}`);
});
