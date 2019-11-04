var express = require('express'),
    router = express.Router();
var Cat = require('../models/Cat');

// Main Page
router.get('/', function (req, res, next) {
    res.render('login', {error: {bad: false}});
});


// Register Page
router.get('/register', function (req, res, next) {
   // TODO: Cambiar el render
    res.render('login', {error: {bad: false}});
});

// Register Page
router.post('/register', function (req, res, next) {
    // TODO :Mostrar un HTML con los datos recibidos
 });


router.post('/', function (req, res, next) {
    var gato =  new Cat({name: req.body.user});
    gato.save((err, gatoDb) => {
        if (err)
            res.json({name})
        else {
            res.json(gatoDb)
        }
    });
    res.json("hola");
});





module.exports = router