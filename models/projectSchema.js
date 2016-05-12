var mongoose = require('mongoose');
var Project = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var ProjectSchema = mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    title: {type: String, required: true},
    description: {type: String,required: true},
    creator: {type: objectId, ref: 'User'},
    users: [{type: objectId, ref: 'User'}],
    team: {type: objectId, ref: "Team"},
    tasks: [{type: objectId, ref: "Task"}],
});

module.exports = mongoose.model('Project', ProjectSchema);
