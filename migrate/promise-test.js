var Q = require('q')
require('../db')
var p = require('prints')
var Account = require('../models/account')

// var account = new Account()
// account.username = 'promise-joe'
// account.password= 'root123'
// account.age = 99
// account.save(function(er, ret) {
// 	if (er) {
// 		return console.log(er)
// 	};
// 	process.exit(1)
// })

// Q.nfcall(Account.getUserByName.bind(Account), 'promise-joe')
// .then(function(user) {
// 	//console.log(user)
// 	Account.getUserByAge(233)
// })
// .then(function(user2) {
// 	console.log('123456789')
// 	console.log(user2)
// })
// .catch(function(er) {
// 	console.log(er)
// })

Q.resolve('foo').then(Q.resolve('bar')).then(function (result) {
  console.log(result); //foo
});

// Q.resolve('foo').then(null).then(function (result) {
//   console.log(result); //foo
// });

Q.resolve('foo').then(function () {
  return Q.resolve('bar');
}).then(function (result) {
  console.log(result);
});