var express = require('express'),
    router = express.Router(),
    Cat = require('../models/Cat');

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
     res.render('cat');
 });
 
 // Register Page
 router.post('/register', function (req, res, next) {
    var nCat = new Cat({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age
    });
   
    nCat.save(function(err, gato){
        if (err) res.json({err})
        res.json(gato);
    })
  });
 

module.exports = router;