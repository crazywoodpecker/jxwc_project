var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();
var knowledge = require('../models/knowledge')
/* GET knowledge listing. */
mongoose.connect('mongodb://localhost/demo');

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});
router.get('/knowledge', function(req, res, next) {
  knowledge.find({},function(err,docs){
    console.log(docs);
    res.send(docs);
  });
});
module.exports = router;