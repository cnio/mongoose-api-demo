require('../db')
var p = require('prints')
var Account = require('../models/account')

var account = new Account()
account.username = 'toObject'
account.password= '1234567'
account.save(function(er, ret) {
	if (er) return console.log(er)
	p(ret, 'ret')
	var res = ret.toJSON()
	console.log(res)
})

// when invoke toJSON(), toJSON() will judge virtuals property,
// and return the result which you wanted, 
// like transform "_id" to "id"