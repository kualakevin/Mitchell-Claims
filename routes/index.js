var express = require('express');
var router = express.Router();
var claimdb = require('./createClaimDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res){
  console.log(req.body);
  var claim = req.body.mitchellClaim;
  console.log("posting");

  if(claim){
    console.log("claim exists");
    var createStatus = claimdb.createClaim(claim);
  }
});

module.exports = router;
