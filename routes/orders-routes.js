var express =require('express');
const ordersController = require('../controllers/orders-controller')
const path =require('path');
var router =express.Router();

router.get('/orders',ordersController.ordersMade);

module.exports = router;