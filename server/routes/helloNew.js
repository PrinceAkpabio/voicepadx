const express = require('express'),
 newRouter = express.Router(),
 hellonew = require('../controller/helloNew')

newRouter.get('/datt/', hellonew.datt)
 
module.exports = newRouter
