const { Schema, model, ObjectId } = require('mongoose');

const Category = new Schema({
  name: { type: String, require: true },
  level: { type: String, default: 'easy' },
  image: { type: String },
  words: [{ type: ObjectId, ref: 'Word' }],
});

module.exports = model('Category', Category);
