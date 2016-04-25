require('../db')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var p = require('prints')
// define a schema
var personSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  age: Number,
  nickname: String
});

personSchema.pre('save', function(next) {
	if (!this.age) {
		p('pre1')
		this.age = 22
	};
	p('pre2')
	next()
})

// compile our model
var Person = mongoose.model('Person', personSchema);

// create a document
var bad = new Person({
    name: { first: 'Walter', last: 'White' },
    nickname: 'qun'
});

bad.save(function(er, ret) {
  if (er) {return console.log(er)};
  console.log('saved', ret)
})


----------start----------
pre1
----------end------------


----------start----------
pre2
----------end------------

mongodb open success
saved
{ name: { last: 'White', first: 'Walter' },
  _id: 571ddf43723c10bc7c9e1ab4,
  nickname: 'qun',
  age: 22,
  __v: 0 }



