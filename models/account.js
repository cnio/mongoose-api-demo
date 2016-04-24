var mongoose = require('mongoose')

var AccountSchema = new mongoose.Schema({
	username: String,
	password: String
})

AccountSchema.methods.greet = function () {
	console.log(this.username + ': hi, how are you!')
}

// 序列化结果
AccountSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

// { _id: 571cdd1447c68f7944029fac,
//   username: 'joe',
//   password: '1234567',
//   __v: 0 }


var Account = mongoose.model('Account', AccountSchema)

module.exports = Account