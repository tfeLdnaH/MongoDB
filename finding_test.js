const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){
  var char;//global variable
  // Add a character to the db before each tests
  beforeEach(function(done){ //hooks
    char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Finds a record from the database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Finds a record by unique id', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      //id is object, so it must be converted to string
      assert(result._id.toString() === char._id.toString());//char._id is the id from char = new MarioChar which we did above
      done();
    });
  });

});