const router = require('express').Router();
let notes = require('../models/notes');
let users = require('../models/users');


 app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

// GET NOTES
router.route('/').get((req, res) => {
 notes.find()
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json("Error: ", err))
})


// CREATE NOTES
router.route('/add').post(async (req, res, next) => {
 const title = req.body.titlle;
//  const image = req.body.image;
 const userId = req.body.id

  const newNote = new notes({
    title
    // image,
  });

  newNote.save()
    .then(async (note) =>{
      // res.send( note)
      
    return await users.findByIdAndUpdate(
        userId,
        { $push: { notes: note._id } },
        { new: true, useFindAndModify: false }
      );
    }).then(async() => {
     await res.json('Note saved and added to User')
    })
    .catch(err => res.status(400).json('Error creating Notes: ', err))
  next()
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
  const title = req.body.titlle;
  

  const updatedNote = {
     title,
    }

  notes.findByIdAndUpdate(id, updatedNote)
   .then(() => res.json('Note Updated')).catch(err => res.status(400).json('Error in updating note: ', err))
 })


module.exports = router;