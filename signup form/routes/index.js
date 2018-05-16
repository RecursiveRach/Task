var express = require('express');
var router = express.Router();
var User = require('../lib/User');



router.post('/register', function(req, res) {
   var firstname = req.body.firstname;
   var lastname = req.body.lastname;
   var username = req.body.username;
   var gender = req.body.gender;
   var mobile = req.body.mobile;
   var email = req.body.email;
   var password = req.body.password;

   var newuser = new User();
   newuser.firstname = firstname;
   newuser.lastname = laststname;
   newuser.username = username;
   newuser.gender = gender;
   newuser.mobile = mobile;
   newuser.email = email;
   newuser.password = password;
   newuser.save(function(err, savedUser) {
   	  if(err) {
   	  	console.log(err);
   	  	return res.status(500).send();
   	  }
   	  return res.status(200).send();
   })

});
module.exports = router;