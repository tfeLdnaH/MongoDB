const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model
//scheme
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});


//model - collect name
//'mariochar' - is the model
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;