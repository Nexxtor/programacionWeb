'use strict';
const mongoose = require("mongoose"),
    menu = require('../models/Menu');

module.exports = function (req, res, next) {
    menu.find({}, function (err, menus) {
        if (err) {
            next(err);
        } else {
            menus.forEach(menu => {
                res.app.locals[menu.name] =  menu.options;
            });
            next();
        }
    });
};