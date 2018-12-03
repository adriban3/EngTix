const express = require('express');
const router = express.Router();
const tixController = require('../controller/tixController');
const passport = require('passport');

router.route('/all')
    .get(tixController.findAll);

router.route('/')
    .post((req, res) => tixController.insert(req.body));

router.route('/newUser')
    .post((req, res) => tixController.userInsert(req.body));

router.route('/login')
    .post((req, res, next) => {
        next()
    },
        passport.authenticate('local'),
        (req, res) => {
            var userInfor = {
                username: req.user.username
            };
            res.send(userInfor)
        }
    ) //come back to this

module.exports = router;