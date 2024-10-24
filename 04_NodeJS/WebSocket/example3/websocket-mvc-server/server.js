const express = require('express');
const http = require('http');
const { wss, handleWebSocketConnection } = require('./controllers/websocketController');

const app = express();
const server = http.createServer(app);

// Configurar ruta simple
app.get('/', (req, res) => {
    res.send('Servidor WebSocket en funcionamiento');
});

// Manejamos las conexiones WebSocket
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        handleWebSocketConnection(ws);
    });
});

// Iniciar el servidor en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});
