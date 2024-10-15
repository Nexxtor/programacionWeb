// Importamos el módulo 'express', que es un framework web para Node.js
const express = require('express');
// Creamos una instancia de la aplicación Express
const app = express();
// Definimos el puerto en el que se ejecutará el servidor, usando el valor de la variable de entorno 'PORT' o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Usamos express.json() para analizar el cuerpo de las solicitudes entrantes en formato JSON
app.use(express.json());

// Datos simulados: un array que actúa como una base de datos ficticia para almacenar usuarios
let users = [
    { id: 1, name: 'Miguel' },
    { id: 2, name: 'Ana' }
];

// Ruta para obtener todos los usuarios (Método HTTP: GET)
// Cuando se accede a '/api/users', respondemos con la lista de usuarios en formato JSON
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Ruta para obtener un usuario por ID (Método HTTP: GET)
// Si el usuario con el ID especificado se encuentra, lo devolvemos en formato JSON; de lo contrario, respondemos con un error 404
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id)); // Buscamos el usuario por ID
    if (!user) return res.status(404).send('User not found'); // Si no se encuentra, devolvemos un error
    res.json(user); // Si se encuentra, lo devolvemos
});

// Ruta para crear un nuevo usuario (Método HTTP: POST)
// Cuando se envía una solicitud POST a '/api/users', creamos un nuevo usuario usando los datos enviados en el cuerpo de la solicitud
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1, // Asignamos un nuevo ID
        name: req.body.name // Tomamos el nombre del cuerpo de la solicitud
    };
    users.push(newUser); // Agregamos el nuevo usuario al array de usuarios
    res.status(201).json(newUser); // Respondemos con el nuevo usuario y un código de estado 201 (Creado)
});

// Ruta para actualizar un usuario existente (Método HTTP: PUT)
// Cuando se envía una solicitud PUT a '/api/users/:id', buscamos el usuario por ID
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id)); // Buscamos el usuario por ID
    if (!user) return res.status(404).send('User not found'); // Si no se encuentra, devolvemos un error
    user.name = req.body.name; // Actualizamos el nombre del usuario con el nuevo valor
    res.json(user); // Devolvemos el usuario actualizado
});

// Ruta para eliminar un usuario (Método HTTP: DELETE)
// Cuando se envía una solicitud DELETE a '/api/users/:id', buscamos el índice del usuario en el array
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id)); // Buscamos el índice del usuario
    if (userIndex === -1) return res.status(404).send('User not found'); // Si no se encuentra, devolvemos un error
    const deletedUser = users.splice(userIndex, 1); // Eliminamos el usuario del array
    res.json(deletedUser); // Devolvemos el usuario eliminado
});

// Iniciamos el servidor y escuchamos en el puerto definido
app.listen(PORT, () => {
    // Mensaje en la consola para indicar que el servidor está funcionando
    console.log(`Server is running on http://localhost:${PORT}`);
});
