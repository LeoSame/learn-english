const { Shema, model } = require('mongoose');

const User = new Shema({
  login: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
});

module.exports = model('User', User);
