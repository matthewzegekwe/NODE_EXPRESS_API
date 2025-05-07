// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory datastore
let items = [];
let idCounter = 1;

// Routes

// Root Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Get item by ID
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }

    const newItem = {
        id: idCounter++,
        name,
        description
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, description } = req.body;

    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }

    item.name = name;
    item.description = description;

    res.json(item);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }

    items.splice(itemIndex, 1);
    res.status(204).send();
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
      
