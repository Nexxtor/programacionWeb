const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Item', ItemSchema);
