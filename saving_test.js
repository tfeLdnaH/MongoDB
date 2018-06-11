const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){
    //mariochar is the module
    const char = new MarioChar({ //give a lot of method to interect with db
      name: 'Mario' //new record
    });

    char.save().then(function(){  //wait save, and then fire the function
      assert(char.isNew === false); //return true when save at database
      done();//when it is completed use done parameter
    });

  });
//next test
});