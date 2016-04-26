require('../db')
var p = require('prints')
var Account = require('../models/account')

var account = new Account()
account.username = 'toObject'
account.password= '1234567'
account.save(function(er, ret) {
	if (er) return console.log(er)
	p(ret, 'ret')
	
	// toJSON() test
	var res = ret.toJSON()
	console.log(res)

	// toObject() test
	// var res = ret.toJSON() //NO need to invoke toObject() manual 
	// console.log(res)
})

//when invoke toJSON(), toJSON() will judge virtuals property,
// and return the result which you wanted, 
// like transform "_id" to "id".

//the diff between toJSON and toObject is
// toJSON() only applies when the documents toJSON method is called.
// like `var res = ret.toJSON()`

// toObject() applies automatically, each operation. 