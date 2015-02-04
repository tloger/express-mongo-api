var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validations = require('../utils/validations.js');

var ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    validate: validations.nameValidator
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: 'client'
  },
});

module.exports = mongoose.model('project', ProjectSchema);