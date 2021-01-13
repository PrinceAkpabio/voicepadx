const router = require('express').Router();
let notes = require('../models/notes');

// GET NOTES
router.route('/').get((req, res) => {
 notes.find()
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json("Error: ", err))
})


// CREATE NOTES
router.route('/add').post((req, res) => {
 const username = req.body.username;
 const note = req.body.note;

 const newNotes = new notes({
  username,
  note,
 })

 newNotes.save()
  .then(() => res.json('New Notes Added!'))
 .catch(err => res.status(400).json('Error creating Notes: ', err))
})


// GET NOTE
router.route('/note/:id').get((req, res) => {
 const id = req.params.id;

 notes.findById(id)
  .then(note => res.json(note))
  .catch(err => res.status(400).json("Error fetching note: ", err))
})


// DELETE NOTE
router.route('/note/:id').delete((req, res) => {
 const id = req.params.id
 notes.findByIdAndDelete(id)
  .then(note => res.json("Note Deleted"))
  .catch(err => res.status(400).json('Error deleting note: ', err))
})

// UPDATE NOTE
router.route('/note/:id').post(
 (req, res) => {
  const id = req.params.id
  const username = req.body.username;
  const note = req.body.note;

  const updatedNote = {
     username,
     note,
    }

  notes.findByIdAndUpdate(id, updatedNote)
   .then(() => res.json('Note Updated')).catch(err => res.status(400).json('Error in updating note: ', err))
 })


module.exports = router;