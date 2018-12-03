//move db calls to controller when everything is working properly
const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const userDB = require('../models/user');

passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ')
    console.log(user)
    console.log('---------')
    done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
    console.log("DeserializeUser called")
    userDB.findOne(
        { _id: id },
        'username',
        (err, user) => {
            console.log('*** Deserialize user, user:')
            console.log(user)
            console.log('---------')
            done(null, user)
        }
    )
})

passport.user(LocalStrategy)

module.exports = passport