var express = require('express');
//var rpi = require('../rpi/rpi');
var router = express.Router();

/* GET users listing. */
router.get('/:status', function (req, res, next) {

  var status =  req.params.status;
  //rpi.SwitchLight(status, function () {
  //  res.json({code: 200, status: status});
  //});
});


module.exports = router;
