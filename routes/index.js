var express = require('express');
var router = express.Router();


var fs = require('fs');
var companies;
fs.readFile('./data/companies.json', 'utf8', function (err, data) {
  if (err) 
  	{
  		console.log(err);
  		throw err;
  	}

  companies = JSON.parse(data);
  console.log(companies);
});

var polls;
fs.readFile('./data/polls.json', 'utf8', function (err, data) {
  if (err) 
  	{
  		console.log(err);
  		throw err;
  	}

  polls = JSON.parse(data);
  console.log(polls);
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Secim Anketleri',
  	data: companies,
  	recent_polls: polls
  });
});

module.exports = router;
