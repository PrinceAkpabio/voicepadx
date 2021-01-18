const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleSchema = new Schema({
 name: String
});
const role = mongoose.model("role", roleSchema)

const ROLES = ["user", "admin", "moderator"];

module.exports = {role, ROLES};