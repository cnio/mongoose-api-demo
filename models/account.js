var mongoose = require('mongoose')

var AccountSchema = new mongoose.Schema({
	username: String,
	password: String,
    age: Number
})

AccountSchema.statics.getUserByName = function(name, cb) {
    return this.findOne({username: name}, cb)
}

AccountSchema.statics.getUserByAge = function(age, cb) {
    return this.findOne({age: age}, cb)
}

// 序列化结果
AccountSchema.set('toJSON', {
    virtuals: true,
    transform: function(doc, ret) {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

AccountSchema.virtual('id')
    .get(function() {
        if (typeof this._id == 'object')
            return this._id.toHexString();
        return this._id
    });
// AccountSchema.methods.greet = function () {
// 	console.log(this.username + ': hi, how are you!')
// }

AccountSchema.method('sayhi', function(){
	console.log(this.username + ': hi, how are you!')
})

AccountSchema.method('fuck', function(){
    //var _this = this;
    var Account = this.model('Account')
    Account.find({username: 'hihi'}, function(er, doc) {
        //doc.password = 'root'
        //doc.save(cb)
        console.log('fuck method')
        console.log(doc)
    })
    //console.log(this.username + ': hi, how are you!')
})

var Account = mongoose.model('Account', AccountSchema)

module.exports = Account