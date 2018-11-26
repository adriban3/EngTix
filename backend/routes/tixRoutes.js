const express = require('express');
const router = express.Router();
const tixController = require('../controller/tixController');

router.route('/all')
    .get(tixController.findAll);

router.route('/')
    .post((req, res) => tixController.insert(req.body));

router.route('/newUser')
    .post((req, res) => tixController.userInsert(req.body));

module.exports = router;