var express = require('express'),
    router = express.Router();

router.get("/", function (req, res, next) {
    res.render('login', {
        err: {
            bad: false
        }
    });
});

router.post("/", function (req, res, next) {
    var {
        user,
        password
    } = req.body;
    if (password != "nestorguapo")
        res.render('login', {
            err: {
                bad: true,
                msg: "No te sabes la contra"
            }
        });
    else
        res.render('login', {
            err: {
                bad: false,
            }
        });

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
 

module.exports = router;