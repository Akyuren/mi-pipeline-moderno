const express = require('express');
const app = express();

// Ruta principal (Endpoint)
app.get('/', (req, res) => {
    res.json({
        mensaje: "Hola! Soy una API corriendo en Docker",
        estado: "OK",
        fecha: new Date()
    });
});

// Ruta de salud (Health check) - muy común en Docker/Kubernetes
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

// Exportamos la app (sin arrancarla) para poder probarla en los tests
module.exports = app;
