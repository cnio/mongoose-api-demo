require('../db')
var p = require('prints')
var Account = require('../models/account')

var account = new Account()
account.username = 'joe'
account.password= '1234567'
account.save(function(er, ret) {
	if (er) {
		return console.log(er)
	};
	p(ret, 'ret')
	var res = ret.toJSON()  // toJSON? why [object Object]
	p(res, 'ret.toJSON')
	console.log(res)
	console.log('save successfully!')
	ret.sayhi() //method invoke
})