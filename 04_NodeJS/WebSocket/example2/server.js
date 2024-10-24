// Importamos la librería ws
const WebSocket = require('ws');

// Configuramos el servidor en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

// Cuando un cliente se conecta
wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Escuchar mensajes del cliente
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);

        // Enviar una respuesta de vuelta al cliente
        ws.send(`Mensaje recibido: ${message}`);
    });

    // Enviar un mensaje al cliente cuando se conecte
    ws.send('Bienvenido al servidor WebSocket');
});

console.log('Servidor WebSocket corriendo en ws://localhost:8080');
