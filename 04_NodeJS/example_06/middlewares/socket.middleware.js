import jwt from 'jsonwebtoken';
import { config } from '../config/config.js'; // Adjust the path as necessary

export const socketMiddleware = (io) => {
  io.use((socket, next) => {
    // Extract token from query params
    const token = socket.handshake.query.token;

    if (!token) {
      console.error('No token provided. Proceeding as unauthenticated.');
      socket.user = null; // No user info attached for unauthenticated connections
      return next(); // Allow connection without token
    }

    // Verify token
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        console.error('Invalid token:', err.message);
        return next(new Error('Authentication error: Invalid token'));
      }

      // Attach the user information to the socket object
      socket.user = decoded; // Store user data
      console.log('User authenticated:', decoded);
      next(); // Call next to proceed with the connection
    });
  });

  io.on('connection', (socket) => {
    // Log the user connection status
    if (socket.user) {
      console.log(`User connected: ${socket.user.id}`); // Log the user ID if authenticated
    } else {
      console.log('User connected: Unauthenticated');
    }

    // Public event - accessible to everyone
    socket.on('publicMessage', (msg) => {
      console.log('Public message:', msg);
      io.emit('publicMessage', msg); // Broadcast to all clients
    });

    // Private event - requires authentication
    socket.on('privateMessage', ({ to, msg }) => {
      if (!socket.user) {
        console.error('Private message attempt from unauthenticated user');
        return; // Prevent sending private messages from unauthenticated users
      }
      
      console.log(`Private message from ${socket.user.id} to ${to}:`, msg);
      socket.to(to).emit('privateMessage', msg); // Send message to the specific user
    });

    socket.on('disconnect', () => {
      if (socket.user) {
        console.log(`User disconnected: ${socket.user.id}`); // Log the user ID if authenticated
      } else {
        console.log('User disconnected: Unauthenticated');
      }
    });
  });
};
