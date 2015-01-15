var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrackerSchema = new Schema({
  start: {
    type: Date,
    required: true,
    default: Date.now
  },
  end: {
    type: Date,
    required: true,
    default: Date.now
  },
  working: {
    type: Boolean,
    required: false,
    default: false
  },
  task: {
    type: mongoose.Schema.ObjectId,
    ref: 'task'
  },
});

module.exports = mongoose.model('tracker', TrackerSchema);