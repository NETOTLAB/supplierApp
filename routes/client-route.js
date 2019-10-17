var express =require('express');
const clientController = require('../controllers/client-controller')
const path =require('path');
var router =express.Router();

router.get('/',clientController.clientMonitor);

module.exports = router;