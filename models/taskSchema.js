var mongoose = require('mongoose');
var Task = mongoose.Schema;

var TaskSchema = mongoose.Schema({
  id: Number,
  createdAt: {type: Date, default: Date.now},
  title: {type: String, required: true},
  priority: Number,
  status: Number,
  deadline: {type: Date, default: new Date()}
  // creator: {User Object},
  // project: {Project Object},
});

module.exports = mongoose.model('Task', TaskSchema);
