var Projects = require('../models/projectSchema.js');

module.exports = {

    Create: function(req, res) {
        req.body.creator = req.user._id;
        Projects.create(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Read: function(req, res, next) {
        Projects.find(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    ReadAndPopulate: function(req, res, next) {
        Projects.find({$or: [{users: {$in: [req.user._id]} }, {creator: req.user._id}]})
        .populate("tasks")
        .exec(function(err, response) {
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
