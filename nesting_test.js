const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/authors');

// Describe our tests
describe('Nesting records', function(){

    beforeEach(function(done){
        // Drop the collection (is authors in a plural because mongodb create with "s")
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });

    // Create tests
    it('Creates an author with sub-documents', function(done){

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){//trigger the function once was data is saved also order to check if the data was save 
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){ //the clause "then"  make it sync. otherwise the save would execute async
                assert(record.books.length === 1);
                done();
            });
        });

    });

    it('Adds a book to an author', function(done){

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                // add a book to the books collection
                record.books.push({title: "Wise Man's Fear", pages: 500});//push is to insert data into array
                record.save().then(function(){
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });

    });

});