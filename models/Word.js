const { Schema, model, ObjectId } = require('mongoose');

const Word = new Schema({
  name: { type: String, require: true },
  translation: { type: String, require: true },
  sound: { type: String },
  image: { type: String },
  categories: [{ type: ObjectId, ref: 'Category' }],
});

module.exports = model('Word', Word);
