const { model, Schema, ObjectId } = require('mongoose');

const Word = new Schema({
  name: { type: String, required: true },
  soundLink: { type: String },
  imgLink: { type: Number, default: 0 },
  user: { type: ObjectId, ref: 'User' },
  category: { type: ObjectId, ref: 'File' },
});

module.exports = model('Word', Word);
