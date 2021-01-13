const router = require('express').Router();
let user = require('../models/users');

// GET USERS
router.route('/').get((req, res) => {
 user.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' , err))
});

// CREATE USERS
router.route('/add').post((req, res) => {
 const name = req.body.name;
 const username = req.body.username;
 const email = req.body.email;
 const password = req.body.password;

 const newUser = new user({
  name,
  username,
  email,
  password,
  password,
 });

 newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' , err))
})


// GET SINGLE USER
router.route('/user/:id').get((req, res) => {
  const id = req.params.id
  user.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(400)
    .json('Error occured while fetching user: ' , err))
})

// DELETE SINGLE USER
router.route('/user/:id').delete((req, res) => {
  const id = req.params.id;
  user.findByIdAndDelete(id)
    .then(user => res.json('User Deleted'))
    .catch(err => res.status(400).json('Error deleting user: ' , err))
})
// UPDATE SINGLE USER
router.route('/user/:id').post((req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const updateUser = {
    name,
    username,
    email,
    password
  }
  
  user.findByIdAndUpdate(id, updateUser)
    .then(() => res.json("User Updated!"))
    .catch(err => res.status(400)
    .json('Error updating user: ',  err))
})

module.exports = router;