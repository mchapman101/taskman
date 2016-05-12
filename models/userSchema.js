var mongoose = require('mongoose');
var User = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var UserSchema = mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    job_title: String,
    active: Boolean,
    team: {type: objectId, ref: "Team"},
    projects: [{type: objectId, ref: 'Project'}],
    tasks: [{type: objectId, ref: "Task"}],
        // avatar_path: URL,
});

module.exports = mongoose.model('User', UserSchema);
