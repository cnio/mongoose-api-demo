var mongoose = require('mongoose')

var AccountSchema = new mongoose.Schema({
	username: String,
	password: String
})

// AccountSchema.methods.greet = function () {
// 	console.log(this.username + ': hi, how are you!')
// }

AccountSchema.method('sayhi', function(){
	console.log(this.username + ': hi, how are you!')
})

var Account = mongoose.model('Account', AccountSchema)

module.exports = Account