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

router.route('/user')
        .get((req, res, next) => {
            if (req.user) {
                res.json({user: req.user})
            }
            else {
                res.json({user: null})
            }
        }) //come back to this too, no way these work, how are they connecting to DB????

router.route('/logout')
        .post((req, res) => {
            if (req.user) {
                req.logout()
            }
            else {
                res.send({msg: 'no user to log out'})
            }
        })



module.exports = router;