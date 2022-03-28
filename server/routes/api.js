var express = require('express');
var router = express.Router();

var api_controllers = require('../controllers/api_controllers');

/* GET home page. */
router.get('/', api_controllers.index);

module.exports = router;
