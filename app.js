const express = require('express');
const _ = require('underscore');

var port = process.env.PORT || 8080;
var animals = {
    "cat": "meow",
    "dog": "bark",
    "eel": "hiss",
    "bear": "roar",
    "frog": "croak"
}

function getAnimal() {
  return animal = _.sample(Object.entries(animals));
}

const app = express();

app.get('/', function(req, res){
  const [animal_name, sound] = getAnimal();
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`George Orwell had a farm.<br />
E-I-E-I-O<br />
And on his farm he had a ${ animal_name }.<br />
E-I-E-I-O<br />
With a ${ sound }-${ sound } here.<br />
And a ${ sound }-${ sound } there.<br />
Here a ${ sound }, there a ${ sound }.<br />
Everywhere a ${ sound }-${ sound }.<br />`);
      res.end();
});

app.get('/api', function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(animals));
  res.end();
})

module.exports =  app.listen(port, () => {
  console.log(`Launching server on http://localhost:${ port }`)
});
