const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.Projects.find({}).sort("-date")
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}