var mongoose = require('mongoose');

const LanguagesSchema = new mongoose.Schema({
  language: String,
  skill: {
    type: String,
    enum: ['basic', 'fluent', 'native'],
  },
});

const UserSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    index: true,
  },
  ln: {
    type: [LanguagesSchema],
    default: [],
    alias: 'languages',
  },
  contacts: {
    email: String,
    phones: [String],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  someMixed: {
    type: mongoose.Schema.Types.Mixed,
    description: 'Can be any mixed type, that will be treated as JSON GraphQL Scalar Type',
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User