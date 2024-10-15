// Importamos los módulos necesarios
const express = require('express'); // Framework web para Node.js
const axios = require('axios'); // Librería para hacer solicitudes HTTP
const path = require('path'); // Módulo para manejar rutas de archivos

// Creamos una instancia de Express
const app = express();
const PORT = process.env.PORT || 3000; // Definimos el puerto en el que escuchará el servidor

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json()); // Permite manejar solicitudes con contenido JSON
app.use(express.static('views')); // Middleware para servir archivos estáticos desde la carpeta 'views'

// Array para almacenar Pokémon creados (simulando una base de datos)
let pokemons = []; // Inicializamos un array vacío para almacenar los Pokémon

// Ruta para obtener todos los Pokémon (READ)
app.get('/api/pokemon', (req, res) => {
    res.json(pokemons); // Devuelve la lista de Pokémon en formato JSON
});

// Ruta para obtener un Pokémon por nombre (READ)
app.get('/api/pokemon/:name', async (req, res) => {
    const { name } = req.params; // Obtenemos el nombre del Pokémon de los parámetros de la URL

    try {
        // Hacemos una solicitud a la PokeAPI para obtener los datos del Pokémon por nombre
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        res.json(response.data); // Devolvemos los datos del Pokémon como respuesta en formato JSON
    } catch (error) {
        console.error(error); // Imprimimos el error en la consola del servidor
        res.status(404).send('Pokémon not found'); // Enviamos un estado 404 si no se encuentra el Pokémon
    }
});

// Ruta para crear un nuevo Pokémon (CREATE)
app.post('/api/pokemon', async (req, res) => {
    const { name } = req.body; // Obtenemos el nombre del Pokémon del cuerpo de la solicitud

    // Verificamos si el Pokémon ya está en nuestra "base de datos"
    const existingPokemon = pokemons.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (existingPokemon) {
        return res.status(400).send('Pokémon already exists'); // Enviamos un estado 400 si el Pokémon ya existe
    }

    try {
        // Hacemos una solicitud a la PokeAPI para obtener los datos del nuevo Pokémon
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        // Creamos un nuevo objeto Pokémon con su nombre y su imagen
        const newPokemon = {
            name: response.data.name,
            image: response.data.sprites.front_default, // Agregar la URL de la imagen
        };
        pokemons.push(newPokemon); // Agregar el nuevo Pokémon a nuestra "base de datos"
        res.status(201).json(newPokemon); // Enviamos el Pokémon creado como respuesta con un estado 201 (creado)
    } catch (error) {
        console.error(error); // Imprimimos el error en la consola del servidor
        res.status(404).send('Pokémon not found'); // Enviamos un estado 404 si no se encuentra el Pokémon
    }
});

// Ruta para actualizar un Pokémon existente (UPDATE)
app.put('/api/pokemon/:name', async (req, res) => {
    const { name } = req.params; // Obtenemos el nombre actual del Pokémon
    const { newName } = req.body; // Obtenemos el nuevo nombre del cuerpo de la solicitud

    // Buscamos el índice del Pokémon en el array
    const index = pokemons.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
    if (index === -1) {
        return res.status(404).send('Pokémon not found'); // Enviamos un estado 404 si el Pokémon no se encuentra
    }

    try {
        // Hacemos una solicitud a la PokeAPI para obtener los datos del nuevo Pokémon
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newName.toLowerCase()}`);
        // Creamos un nuevo objeto Pokémon actualizado
        const updatedPokemon = {
            name: response.data.name,
            image: response.data.sprites.front_default, // Actualizar la URL de la imagen
        };
        pokemons[index] = updatedPokemon; // Actualizamos el Pokémon en nuestra "base de datos"
        res.json(updatedPokemon); // Enviamos el Pokémon actualizado como respuesta
    } catch (error) {
        console.error(error); // Imprimimos el error en la consola del servidor
        res.status(404).send('New Pokémon not found'); // Enviamos un estado 404 si no se encuentra el nuevo Pokémon
    }
});

// Ruta para eliminar un Pokémon (DELETE)
app.delete('/api/pokemon/:name', (req, res) => {
    const { name } = req.params; // Obtenemos el nombre del Pokémon de los parámetros de la URL
    // Buscamos el índice del Pokémon en el array
    const index = pokemons.findIndex(p => p.name.toLowerCase() === name.toLowerCase());

    if (index === -1) {
        return res.status(404).send('Pokémon not found'); // Enviamos un estado 404 si el Pokémon no se encuentra
    }

    pokemons.splice(index, 1); // Eliminar Pokémon del array
    res.status(204).send(); // Enviamos un estado 204 (sin contenido) indicando que la eliminación fue exitosa
});

// Ruta para mostrar la página principal (GET)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Enviamos el archivo 'index.html' como respuesta
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Imprimimos la URL del servidor en la consola
});
