const router = require('express').Router();
let users = require('../models/users');
// const { role, ROLES } = require('../models/role'); 
const secret = process.env.SECRET;
const checkDuplicateUsernameOrEmail = require('../config/verifySignUp');
const verifyToken = require('../config/authJwt');


let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

 app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


// GET USERS
router.route('/').get((req, res) => {
 users.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' , err))
});

// CREATE USERS
router.route('/signup').post(checkDuplicateUsernameOrEmail, (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 10);
  
  

  const newUser = new users({
    username,
    email,
    password,
  });

  newUser.save()
    .then(() => res.json('Registration Successful!'))
    .catch(err => res.status(400).json('Error from server: ', err))
});

// Sign In User
router.route('/signin').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.findOne({ username: username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return;
    }
    
    if (!user) {
      return res.status(404).send({ message: "User Not Found!" });
    }

    let passwordIsValid = bcrypt.compareSync(password, user.password)

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    let token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 })

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token
    });
  });
});


// GET SINGLE USER
router.route('/user/:id').get([verifyToken], (req, res) => {
  const id = req.params.id
  users.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(400)
    .json('Error occured while fetching user: ' , err))
})

// DELETE SINGLE USER
router.route('/user/:id').delete((req, res) => {
  const id = req.params.id;
  users.findByIdAndDelete(id)
    .then(user => res.json('User Deleted'))
    .catch(err => res.status(400).json('Error deleting user: ' , err))
})
// UPDATE SINGLE USER
// router.route('/user/:id').post((req, res) => {
//   const id = req.params.id;
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;

//   const updateUser = {
//     username,
//     email,
//     password
//   }
  
//   users.findByIdAndUpdate(id, updateUser)
//     .then(() => res.json("User Updated!"))
//     .catch(err => res.status(400)
//     .json('Error updating user: ',  err))
// })

module.exports = router;