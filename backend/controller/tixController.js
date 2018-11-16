import db from '../models/ticket';

module.exports = {
    findAll: function (req, res) {
        db
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    insert: function (req, res) {
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel), console.log('New Ticket Added to DB'))
            .catch(err => res.status(422).json(err))

    }
}