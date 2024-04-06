var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola mundo', fullName:'Keyber Javier Mendoza Alexandre', id:'V31294589',section:'2'});
});


module.exports = router;
