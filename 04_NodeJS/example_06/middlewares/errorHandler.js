// Middleware para el manejo de errores
const errorHandler = (err, req, res) => {
  // Establece un código de estado por defecto si no hay uno
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    // Solo muestra el stack trace en entorno de desarrollo
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorHandler;
