import app from './app.js';
import {
  connectToDatabase,
  disconnectFromDatabase,
} from './config/database.js';
import { config } from './config/config.js';
import http from 'http'; // Import http module
import { Server } from 'socket.io'; // Import Socket.IO Server
import { socketMiddleware } from './middlewares/socket.middleware.js'; // Import the middleware

// Create an HTTP server
const server = http.createServer(app);

// Create a new instance of Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // Allow requests from any origin
  }
});

// Use the socket middleware
socketMiddleware(io);

// Function to start the server
const startServer = async () => {
  try {
    await connectToDatabase();

    server.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });

    // Handle server shutdown and database disconnection
    process.on('SIGINT', async () => {
      console.log('Gracefully shutting down');
      await disconnectFromDatabase();
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
