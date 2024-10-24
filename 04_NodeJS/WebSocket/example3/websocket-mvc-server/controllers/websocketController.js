const WebSocket = require('ws');

// Configuración del servidor WebSocket
const wss = new WebSocket.Server({ noServer: true });

// Función para manejar la conexión
function handleWebSocketConnection(ws) {
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);

        // Difundir el mensaje a todos los demás clientes
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(message);
            }
        });
    });

    ws.send('Conexión WebSocket establecida');
}

// Exportamos el manejador de WebSocket y el servidor
module.exports = { wss, handleWebSocketConnection };
