const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cat = new Schema({
    name: String,
    lastname: String,
    age: Number
});

module.exports = mongoose.model('cat',Cat);