var express = require('express');
var bodyParser = require('body-parser');
var sequelize = require('./db/config.js');
var index = require('./routes/index.js');
var users = require('./routes/users.js');
var items = require('./routes/items.js');

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Router
app.use('/', index); // nothing here for now
app.use('/users', users);
app.use('/items', items);

// default route
app.use('/*', function (req, res) {
  res.sendStatus(404);
});

module.exports = app;
