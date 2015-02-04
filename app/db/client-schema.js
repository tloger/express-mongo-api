var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validations = require('../utils/validations.js');


var ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    validate: validations.nameValidator
  }
});

module.exports = mongoose.model('client', ClientSchema);