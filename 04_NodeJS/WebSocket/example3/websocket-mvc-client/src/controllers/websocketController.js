let socket;

// Función para conectar al WebSocket
export const connectWebSocket = (onMessageReceived) => {
    socket = new WebSocket('ws://localhost:8080');

    socket.onmessage = (event) => {
        onMessageReceived(event.data);
    };

    return socket;
};

// Función para enviar mensajes
export const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    }
};
