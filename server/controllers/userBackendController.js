var User = require('../models/userSchema.js');

module.exports = {

    ReadMe: function(req, res, next) {
        User.find(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Find: function(req, res) {
        User.findById(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Create: function(req, res, next) {
        User.create(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Update: function(req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    // Delete: function(req, res) {
    //   User.findByIdAndRemove(req.params.id, function(err, response){
    //     return err ? res.status(500).send(err) : res.send(response);
    //   });
    // }

};
