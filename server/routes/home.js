const express = require('express'),
 homeRouter = express.Router(),
 home = require('../controller/home')

homeRouter.get('/', home.home)
 
module.exports = homeRouter