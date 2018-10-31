var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

// Restrict access to root page
userController.home = function (req, res) {
  console.log(req.user);
  res.render('index', {
    user: req.user,
    title: 'Express'
  });
};

// Go to registration page
userController.register = function (req, res) {
  res.render('auth/register');
};

// Post registration
userController.doRegister = function (req, res) {
  User.register(new User({
    username: req.body.username,
    name: req.body.name
  }), req.body.password, function (err, user) {
    if (err) {
      return res.render('auth/register', {
        user: user
      });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function (req, res) {
  res.render('auth/login');
};

// Post login
userController.doLogin = function (req, res) {
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;