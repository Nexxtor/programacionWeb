var express = require('express'),
    router = express.Router();

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
    var bad = req.body.password != "nestorguapo";
 
    console.log("---------->", bad);
   
    res.render('login', {
        error: {
            bad,
            msg: "Ustede no se sabe la contraseña"
        }
    });
});





module.exports = router