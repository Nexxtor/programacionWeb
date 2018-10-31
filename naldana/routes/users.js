'use strict';
var express = require('express');
var router = express.Router();
var userController = require("../controllers/UserController");
var passport = require('passport')

/* GET users listing. */
router.get('/profile',userController.profile);

module.exports = router;
