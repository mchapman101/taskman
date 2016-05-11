var Task = require('../models/taskSchema.js');

module.exports = {

  Read: function (req, res, next) {
            Task.find(req.body, function(err, response) {
                return err ? res.status(500).send(err) : res.send(response);
            });
        },

  Find: function (req, res) {
            Task.findById(req.params.id, function(err, response) {
                return err ? res.status(500).send(err) : res.send(response);
            });
          },

  Create: function(req, res) {
    Task.create(req.body, function(err, response){
      return err ? res.status(500).send(err) : res.send(response);
    });
  },

  Delete: function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, response){
      return err ? res.status(500).send(err) : res.send(response);
    });
  }

};
