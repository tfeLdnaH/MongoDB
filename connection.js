const mongoose = require('mongoose');


// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db before tests run ( ***run just once)
before(function(done){

    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

});

// Drop the characters collection before each test
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();//when done move to the test. that beforeeach is executed before the each "test"
    });
});
/*
    // Connect to mongodb - database can have many collection. Ecample: mario(is a model) and dom kimkong(is a model)
    //Each model has a scheme. Example: name, age

// ES6 Promises
    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://localhost/testaroo');//testaroo - name of database
    mongoose.connection.once('open', function(){ //event list = "once"
        console.log('Connection has been made, now make fireworks...');
        //done();
    }).on('error', function(error){ //whenever the error occurs
        console.log('Connection error:', error);
    });

*/