const { Schema, model, ObjectId } = require('mongoose');

const Category = new Shema({
  name: { type: String, require: true },
  lastName: { type: String },
  words: [{ type: ObjectId, ref: 'Word' }],
});

module.exports = model('Category', Category);
