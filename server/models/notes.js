const mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 notesSchema = new Schema({
  title: {
   type: String
  },
  // images: [],
 }, {timestamps: true}),
 notes = mongoose.model('note', notesSchema)

 module.exports = notes