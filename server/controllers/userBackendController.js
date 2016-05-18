var User = require('../models/userSchema.js');

module.exports = {

    ReadMe: function(req, res, next) {
        User.findById(req.user._id, function(err, response) {
          var userInfo = response.toObject();
          console.log(userInfo);
          delete userInfo.password;
          console.log(userInfo);

            return err ? res.status(500).send(err) : res.send(userInfo);
        });
    },

    Find: function(req, res) {
        User.findById(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    Create: function(req, res, next) {
        User.create(req.body, function(err, response) {
          if(err) return res.status(500).send(err);
          newUser = response.toObject();
          delete response.password;
          res.status(200).send(newUser);
        });
      },

    Update: function(req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
          if(err){
            return res.status(500).send(err);
          } else {
            response.password = req.body.password;
            response.save(function(err, response){
              return err ? res.status(500).send(err) : res.send(response);
            });
          }
        });
    },

    // Delete: function(req, res) {
    //   User.findByIdAndRemove(req.params.id, function(err, response){
    //     return err ? res.status(500).send(err) : res.send(response);
    //   });
    // }

};
