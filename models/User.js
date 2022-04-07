const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, require: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
});

module.exports = model('User', User);
