var express = require('express');
var router = express.Router();
/* GET knowledge listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "xiaoming",
    count: 123
  });
});
module.exports = router;