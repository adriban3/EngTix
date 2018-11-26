import db from '../models/ticket';
import userDB from '../models/user';

module.exports = {
    findAll: function (req, res) {
        db
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    insert: function (req, res) {

        db
            .create(req)
            .catch(err => console.log(err))
    },

    userInsert: function (req, res) {
        userDB
            .create(req)
            .catch(err => console.log(err))
    }
}