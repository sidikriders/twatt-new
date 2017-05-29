var express = require('express');
var router = express.Router();
var fung = require('../controller/twattControl.js')

router.get('/', fung.searchTwat)

router.get('/home', fung.homeTL)

router.post('/new-twat', fung.newTwat)

module.exports=router;
