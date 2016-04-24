var mongoose = require('mongoose')

var AccountSchema = new mongoose.Schema({
	username: String,
	password: String
})

var Account = mongoose.model('Account', AccountSchema)

module.exports = Account