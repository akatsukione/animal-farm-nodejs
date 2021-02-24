const app = require('../app.js');
const request = require('supertest')(app);

describe('GET', function(){
  it('respond with text/html', function(done){
    request
    .get('/')
    .set('Accept', 'text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  })

  it('respond with George Orwell', function(done){
    request
    .get('/')
    .set('Accept', 'text/html')
    .expect(200, /George Orwell had a farm/ig, done);
  })

  it('/api responds with json', function(done){
    request
    .get('/api')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  })

  it('/api responds with animals object', function(done){
    request
    .get('/api')
    .set('Accept', 'application/json')
    .expect(200, {"cat":"meow","dog":"bark","eel":"hiss","bear":"growl","frog":"croak","lion":"roar"}, done);
  })
})
