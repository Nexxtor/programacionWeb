import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia aquí
import App from './App';
import './index.css';

// Crea un contenedor de la raíz
const container = document.getElementById('root');

// Usa createRoot en lugar de render
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
