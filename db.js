var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');

db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {
  return console.log('mongodb open success');
});