const express = require('express');
const Item = require('../models/items'); // Asegúrate de que el modelo esté correctamente importado

const router = express.Router();

// GET: Obtener todos los items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los items' });
    }
});

// POST: Crear un nuevo item
router.post('/', async (req, res) => {
    const { name, description } = req.body;

    // Validar que se proporcionen los campos necesarios
    if (!name || !description) {
        return res.status(400).json({ message: 'Nombre y descripción son obligatorios' });
    }

    try {
        const newItem = new Item({ name, description });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el item' });
    }
});

// DELETE: Eliminar un item por ID
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.status(200).json({ message: 'Item eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el item' });
    }
});

module.exports = router;
