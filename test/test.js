const request = require('supertest')
const app = require('../app.js');

describe('GET', function(){
  it('respond with text/html', function(done){
   request(app)
   .get('/')
   .set('Accept', 'text/html')
   .expect('Content-Type', /html/)
   .expect(200, done);
 })
})
