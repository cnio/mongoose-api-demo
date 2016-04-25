require('../db')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var p = require('prints')
// define a schema
var personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

personSchema.post('init', function (doc) {
  console.log('this fired after a document was saved');
});

// compile our model
var Person = mongoose.model('Person', personSchema);

// create a document
var bad = new Person({
    name: { first: 'Walter', last: 'White' }
});

bad.save(function(er, ret) {
  if (er) {return console.log(er)};
  console.log('saved')
})

// this fired after a document was saved 
// saved


