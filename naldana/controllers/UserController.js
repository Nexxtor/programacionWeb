'use strict';
var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

userController.profile = function (req, res) {
    User.findOne({
        username: req.user.username
    }, function (err, docs) {
        if (err) next(err);
        res.send(docs);
    });
};


module.exports = userController;