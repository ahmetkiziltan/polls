var express = require('express');
var router = express.Router();


var fs = require('fs');
var obj;
fs.readFile('./data/data.json', 'utf8', function (err, data) {
  if (err) 
  	{
  		console.log(err);
  		throw err;
  	}
  	
  obj = JSON.parse(data);
  console.log(obj);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Secim Anketleri',
  	data: obj
  });
});

module.exports = router;
