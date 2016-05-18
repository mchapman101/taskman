var Projects = require('../models/projectSchema.js');

module.exports = {

    Create: function(req, res) {
        Projects.create(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Read: function(req, res, next) {
        Projects.find(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },


    Find: function(req, res) {
        Projects.findById(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Update: function(req, res, next) {
        Projects.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Delete: function(req, res) {
        Projects.findByIdAndRemove(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    }
};
