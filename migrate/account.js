require('../db')
var Account = require('../models/account')

var account = new Account()
account.username = 'joe'
account.password= '1234567'
account.save(function(er, ret) {
	if (er) {
		return console.log(er)
	};
	console.log(ret)
	console.log('save successfully!')
})