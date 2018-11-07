const express = require('express'),
    router = express.Router(),
    dashboardController =  require('../controllers/DashboardController');

router.get('/', dashboardController.home);
router.post('/menu', dashboardController.new);
router.get('/menu/:id', dashboardController.getOneMenu);

module.exports = router;