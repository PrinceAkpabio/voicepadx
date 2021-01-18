const users = require('../models/users')
const ROLES = require('../models/role')

const checkDuplicateUsernameOrEmail = (req, res, next) => {
 const username = req.body.username;
 const email = req.body.email;

 // Username
 users.findOne({ username: username }).exec((err, user) => {
  if (err) {
   res.status(500).send({ message: err })
   return;
  }
    
  if (user) {
   res.status(400).send({ message: "Failed! Username is already in use" })
   return;
  }
   
  
  // Email
  users.findOne({ email: email }).exec((err, user) => {
   if (err) {
    res.status(500).send({ message: err })
    return;
   }
    
   if (user) {
    res.status(400).send({ message: "Failed! Email is already in use" })
    return;
   }
   next();
  });
 });
};

// const checkRolesExisted = (req, res, next) => {
//  let roles = re.body.roles
//  if (roles) {
//   for (let i = 0; i < roles.length; i++){
//    if (!ROLES.includes(roles[i])) {
//     res.status(400).send({
//      message: `Failed! Role ${roles[i]} does not exist!`
//     });
//     return;
//    }
//   }
//  }
// }

module.exports = 
 checkDuplicateUsernameOrEmail;
 // , checkRolesExisted