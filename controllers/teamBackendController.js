var Team = require('../models/teamSchema.js');

module.exports = {

    Create: function(req, res) {
        Team.create(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Update: function(req, res, next) {
        Team.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

};