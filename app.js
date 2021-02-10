var express = require('express');
var app = express();
var _ = require('underscore');
var sample = require('lodash.sample');
var animals = [ "aardvark", "bear", "cat", "eel", "frog" ]
var sounds  = [ "bark", "meow", "squeak", "roar", "hiss" ]

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`The ${ _.sample(animals) } went ${ _.sample(sounds) }.`);
    res.end();
});

var port = process.env.PORT || 8080;
console.log(`Launching server on http://localhost:${ port }`)
app.listen(port);

module.exports = app;
