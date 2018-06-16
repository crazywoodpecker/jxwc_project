var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: 'xiaoming',
    conut: 2
  });
});
module.exports = router;