//mongoose.Types.ObjectId
require('../db')
var p = require('prints')
var mongoose = require('mongoose')
var Account = require('../models/account')
var id = mongoose.Types.ObjectId('571f15fca4cf126e03f5029e')

Account.findOne({username: 'hihi'}, function(er, doc) {
	console.log(doc)
	doc.fuck()
	// doc.password = 'admin'
	// doc.save(er, function(er, d) {
	// 	console.log(d)
	// })
})

// var account = new Account()
// account.username = 'hihi'
// account.password= 'uiuiui'
// account.save(function(er, ret) {
// 	ret.fuck(function(err, data) {
// 		console.log(data)
// 	})
// })