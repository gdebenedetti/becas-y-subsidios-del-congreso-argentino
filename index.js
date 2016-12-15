/**
 * Module dependencies
 */
const express = require('express');
const api = require('./api');

/**
 * Create app and router
 */
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

/**
 * Add router
 */
app.use('/api', api);

/**
 * Handle unhandled exceptions
 */
process.on('unhandledException', err => console.log(err.toString()));

app.listen(6548, () => {
  console.log('App listening on port 6548.');
});