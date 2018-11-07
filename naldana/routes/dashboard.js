const express = require('express'),
    router = express.Router(),
    dashboardController =  require('../controllers/DashboardController');

router.get('/', dashboardController.home);
router.post('/menu', dashboardController.new);

module.exports = router;