const express = require('express');
const router = express.Router();
const tixController = require('../controller/tixController');

router.route('/all')
    .get(tixController.findAll);

module.exports = router;