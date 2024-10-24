const WebSocket = require('ws');

// Crear servidor WebSocket en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

// Escuchar cuando un cliente se conecta
wss.on('connection', function connection(ws) {
  console.log('Nuevo cliente conectado');

  // Escuchar los mensajes que envía el cliente
  ws.on('message', function incoming(message) {
    console.log(`Recibido: ${message}`);

    // Responder al cliente
    ws.send(`Servidor recibió: ${message}`);
  });

  // Enviar un mensaje de bienvenida al cliente
  ws.send('Bienvenido, cliente!');
});

console.log('Servidor WebSocket escuchando en ws://localhost:8080');
