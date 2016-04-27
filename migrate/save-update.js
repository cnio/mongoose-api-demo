//mongoose.Types.ObjectId
require('../db')
var p = require('prints')
var mongoose = require('mongoose')
var Account = require('../models/account')

// common usage
// Account.findOne({username: 'hihi'}, function(er, doc) {
// 	console.log(doc)
// 	doc.password = 'thisisnotapassword2'
// 	doc.save(function(er, d, numAffected) {
// 		if (er) {
// 			console.log(er)
// 		};
// 		console.log(d)
// 		console.log(numAffected)
// 	})
// })

// Promise test

Account.findOne({username: 'hihi'}, function(er, doc) {
	console.log(doc)
	doc.password = 'thisisnotapassword3'
	doc.save().then(function(ret) {
		console.log(ret)
	})
})

// Update
// ```
// Replace an Existing Document

// The products collection contains the following document:

// { "_id" : 100, "item" : "water", "qty" : 30 }
// The save() method performs an update with upsert:true since the document contains an _id field:

// db.products.save( { _id : 100, item : "juice" } )
// Because the _id field holds a value that exists in the collection, the operation performs an update to replace the document and results in the following document:

// { "_id" : 100, "item" : "juice" }

// ```

// // source code
// ```
// Model.prototype.save = function(options, fn) {
//   if ('function' == typeof options) {
//     fn = options;
//     options = undefined;
//   }

//   if (!options) {
//     options = {};
//   }

//   if (options.__noPromise) {
//     return this.$__save(options, fn);
//   }

//   var _this = this;

//   return new Promise.ES6(function(resolve, reject) {
//     _this.$__save(options, function(error, doc, numAffected) {
//       if (error) {
//         fn && fn(error);
//         reject(error);
//         return;
//       }

//       fn && fn(null, doc, numAffected);
//       resolve(doc, numAffected);
//     });
//   });
// };
// ```