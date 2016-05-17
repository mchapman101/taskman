var mongoose = require('mongoose');
var User = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    job_title: String,
    active: Boolean,
    team: {type: objectId, ref: "Team"},
    projects: [{type: objectId, ref: 'Project'}],
    tasks: [{type: objectId, ref: "Task"}],
        // avatar_path: URL,
});

UserSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

UserSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};


module.exports = mongoose.model('User', UserSchema);
