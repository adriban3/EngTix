import db from '../models/ticket';

module.exports = {
    findAll: function (req, res) {
        db
            .find()
            .then(dbModel => res.json(dbModel), console.log('fuck you'))
            .catch(err => res.status(422).json(err));
    }
}