// Function to get the token
function getToken() {
    return localStorage.getItem('token') || ''; // Example: retrieving from local storage
}

// Function to initialize the socket connection
function initializeSocket() {
    const socket = io('https://1f2n3htt-3000.use2.devtunnels.ms/', {
        query: { token: getToken() },
    });

    // Handle connection success
    socket.on('connect', () => {
        console.log('Connected to WebSocket server');
    });

    // Display public messages
    socket.on('publicMessage', (msg) => {
        displayMessage(msg, false);
    });

    // Display private messages
    socket.on('privateMessage', (msg) => {
        displayMessage(msg, true);
    });

    // Send public messages
    document.getElementById('sendButton').addEventListener('click', () => {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value;
        if (message) {
            socket.emit('publicMessage', message);
            messageInput.value = ''; // Clear input
        }
    });

    // Send private messages
    document.getElementById('sendPrivateButton').addEventListener('click', () => {
        const recipientInput = document.getElementById('recipientInput');
        const privateMessageInput = document.getElementById('privateMessageInput');
        const recipient = recipientInput.value;
        const privateMessage = privateMessageInput.value;

        if (recipient && privateMessage) {
            socket.emit('privateMessage', { to: recipient, msg: privateMessage });
            privateMessageInput.value = ''; // Clear input
        }
    });
}

// Function to display messages
function displayMessage(msg, isPrivate) {
    const messagesDiv = document.getElementById('messages');
    const messageHtml = `<div${isPrivate ? ' style="color: green;"' : ''}>${msg}</div>`;
    messagesDiv.innerHTML += messageHtml;
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
}

// Initialize the socket connection
initializeSocket();
