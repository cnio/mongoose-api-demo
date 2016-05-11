require('../db')
var p = require('prints')
var mongoose = require('mongoose')
var Account = require('../models/account')

// common usage
Account.findOne({username: 'hihi'}, function(er, doc) {
	console.log(doc)
	doc.increment() // auto increment
	doc.password = 'thisisnotapassword8'
	doc.save(function(er, d, numAffected) {
		if (er) {
			console.log(er)
		};
		console.log(d)
		console.log(numAffected)
	})
})

Account.findOne({username: 'hihi'}, function(er, doc) {
	console.log(doc)
	doc.increment() // auto increment
	doc.password = 'thisisnotapassword9'
	doc.save(function(er, d, numAffected) {
		if (er) {
			console.log(er)
		};
		console.log(d)
		console.log(numAffected)
	})
})