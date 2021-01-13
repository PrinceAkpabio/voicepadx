const mongoose = require('mongoose'),
 user = require('../models/users'),
 Schema = mongoose.Schema,
 notesSchema = new Schema({
  user_id: [{
   type: Schema.Types.ObjectId,
   ref: "users"
  }],
  note: {type: String, required: true}
 }, {timestamps: true}),
 notes = mongoose.model('note', notesSchema)

 module.exports = notes