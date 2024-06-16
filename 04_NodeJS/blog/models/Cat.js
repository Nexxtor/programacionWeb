var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Cat',Schema);
