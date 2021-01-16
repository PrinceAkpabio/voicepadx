const mongoose = require('mongoose'),
 notes = require('./notes'),
 Schema = mongoose.Schema,
 userSchema = new Schema({
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
  notes: [
  {
    type: mongoose.Schema.Types.ObjectId,
   ref: "note"
  }
  ]
 }, { timestamps: true }),
 
 users = mongoose.model('users', userSchema)

module.exports = users;

