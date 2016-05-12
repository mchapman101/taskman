var mongoose = require('mongoose');
var Team = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var TeamSchema = mongoose.Schema({
    createdAt: {type: Date,default: Date.now},
    title: {type: String,required: true},
    creator: {type: objectId, ref: 'User'},
    projects: [{type: objectId, ref: 'Project'}],
    users: [{type: objectId, ref: 'User'}]
});

module.exports = mongoose.model('Team', TeamSchema);
