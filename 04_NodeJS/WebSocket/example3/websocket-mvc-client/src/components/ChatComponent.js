import React, { useState, useEffect } from 'react';
import { connectWebSocket, sendMessage } from '../controllers/websocketController';

const ChatComponent = () => {
    // Definimos dos estados: 'messages' para almacenar los mensajes del chat y 'inputMessage' para el texto del input.
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    // useEffect se ejecuta al montar el componente.
    // Conectamos al WebSocket y definimos cómo manejar los nuevos mensajes.
    useEffect(() => {
        // Llamamos a la función que establece la conexión WebSocket y actualizamos los mensajes cuando llega uno nuevo.
        const socket = connectWebSocket((newMessage) => {
            // Actualizamos el estado de 'messages' agregando el nuevo mensaje recibido.
            setMessages(prevMessages => [...prevMessages, newMessage]);
        });

        // La función de retorno (cleanup) se ejecuta cuando el componente se desmonta, cerrando el WebSocket.
        return () => {
            socket.close(); // Cerramos la conexión WebSocket cuando se deja de usar el componente.
        };
    }, []); // El array vacío asegura que esto solo se ejecute una vez, al montar el componente.

    // Función que maneja el envío de mensajes
    const handleSendMessage = () => {
        // Verificamos que el campo de input no esté vacío antes de enviar el mensaje.
        if (inputMessage) {
            // Enviamos el mensaje usando la función 'sendMessage' que interactúa con el WebSocket.
            sendMessage(inputMessage);

            // Actualizamos los mensajes agregando el mensaje que acabamos de enviar (marcado como "Tú").
            setMessages(prevMessages => [...prevMessages, `Tú: ${inputMessage}`]);

            // Limpiamos el campo de texto después de enviar el mensaje.
            setInputMessage('');
        }
    };

    return (
        <div>
            <h1>Chat en tiempo real</h1>
            {/* Contenedor para mostrar los mensajes recibidos. */}
            <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'scroll' }}>
                {/* Recorremos el array de mensajes para mostrarlos en la pantalla. */}
                {messages.map((message, index) => (
                    <p key={index}>{message}</p> // Cada mensaje es un párrafo, y usamos 'index' como clave única.
                ))}
            </div>
            {/* Input para escribir el mensaje */}
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)} // Actualizamos el estado 'inputMessage' cada vez que el usuario escribe algo.
                placeholder="Escribe un mensaje..."
            />
            {/* Botón para enviar el mensaje */}
            <button onClick={handleSendMessage}>Enviar</button>
        </div>
    );
};

export default ChatComponent;
