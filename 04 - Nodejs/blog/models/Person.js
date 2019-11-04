const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema =  new Schema({
    username: {type: String, unique: true},
    name: String,
    lastname: String,
    age: Number,
    created: { type: Date, default: Date.now },
    updateAt: Date
});


module.exports = mongoose.model('Person',schema);