var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var router = express.Router();

var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/timetracker';
var mongoose = require('mongoose');
mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

router.use(function (req, res, next) {
  console.log('Something is happening.');
  next();
});

require('./app/routes/routes.js')(router);

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);