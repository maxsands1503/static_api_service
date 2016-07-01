var express = require('express');
var router = express.Router();
var object = require('../lib/object');
var functions = require("../lib/script")
/* GET home page. */

router.get('/users', function(req, res, next) {
  res.json({first: functions.accessFirst(object),
  last: functions.accessLast(object)})
});
router.get('/active_users', function(req, res, next){
  res.json({active: functions.userStatus(object)})
})
module.exports = router;
