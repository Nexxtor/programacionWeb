'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let MenuSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    href: String,
    /*options:  Schema.Types.Mixed /*[{
        title: String,
        href: String
    }]*/
});

MenuSchema.add({
    options: [MenuSchema]
});

module.exports = mongoose.model.menu || mongoose.model('menu', MenuSchema);