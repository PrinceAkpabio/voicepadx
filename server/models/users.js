const mongoose = require('mongoose'),
 notes = require('./notes'),
 Schema = mongoose.Schema,
 userSchema = new Schema({
  name: {
   type: String,
   required: true,
  },
  username: {
   type: String
  },
  email: {
   type: String,
   required: true,
  },
  password: {
   type: String,
   required: true,
  },
  // notes: [notes.note]
 }, { timestamps: true }),
 
 user = mongoose.model('users', userSchema)

module.exports = user;

