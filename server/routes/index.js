var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('is in')
    res.json({
        name: 'xiaoming',
        conut: '2'
    })
});
module.exports = router;
