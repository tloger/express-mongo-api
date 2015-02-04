var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  project: {
    type: mongoose.Schema.ObjectId,
    ref: 'project'
  },
});

module.exports = mongoose.model('task', TaskSchema);