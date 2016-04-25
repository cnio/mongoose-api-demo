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

// compile our model
var Person = mongoose.model('Person', personSchema);

personSchema.virtual('id')
    .get(function () {
        if (typeof this._id == 'object')
        	p('inner')
            return this._id.toHexString();
        p('out')
        return this._id
    });

// create a document
var bad = new Person({
    name: { first: 'Walter', last: 'White' }
});

bad.save(function(er, ret) {
	if (er) {return console.log(er)};
	p(typeof(ret._id))
	p(typeof(ret.id))
})

// ----------start----------
// object
// ----------end------------


// ----------start----------
// inner
// ----------end------------


// ----------start----------
// string
// ----------end------------


