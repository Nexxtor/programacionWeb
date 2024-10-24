import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    useEffect(() => {
        fetchItems(); // Cargar los items al iniciar el componente
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/items');
            setItems(response.data); // Actualizar el estado con los items obtenidos
        } catch (error) {
            console.error("Error al obtener los items:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir la recarga de la página
        try {
            const response = await axios.post('http://localhost:5000/api/items', newItem);
            console.log("Nuevo item creado:", response.data);
            setItems((prevItems) => [...prevItems, response.data]); // Añadir el nuevo item a la lista
            setNewItem({ name: '', description: '' }); // Limpiar el formulario
        } catch (error) {
            console.error("Error al agregar el item:", error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    required
                />
                <button type="submit">Agregar Item</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        {item.name} - {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
