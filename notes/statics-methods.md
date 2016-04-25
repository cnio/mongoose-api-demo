# methods vs statics
[link](http://stackoverflow.com/questions/29664499/mongoose-static-methods-vs-instance-methods)

## points

- statics are the methods defined on the Model. methods are defined on the document (instance).
- Similarly you can't do fido.findByName because findByName would need to search through all documents and fido is just a document.

# method
## Schema#method(method, [fn])

 > Adds an instance method to documents constructed from Models compiled from 
 this schema.

```
var schema = kittySchema = new Schema(..);

schema.method('meow', function () {
  console.log('meeeeeoooooooooooow');
})

var Kitty = mongoose.model('Kitty', schema);

var fizz = new Kitty;
fizz.meow(); // meeeeeooooooooooooow
```
If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as methods.
```
schema.method({
    purr: function () {}
  , scratch: function () {}
});

// later
fizz.purr();
fizz.scratch();
show code
Schema.prototype.method = function(name, fn) {
  if (typeof name !== 'string') {
    for (var i in name) {
      this.methods[i] = name[i];
    }
  } else {
    this.methods[name] = fn;
  }
  return this;
};
```

# static
Schema#static(name, fn)

Adds static "class" methods to Models compiled from this schema.

## Parameters:

name <String>
fn <Function>
## Example
```
var schema = new Schema(..);
schema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});

var Drink = mongoose.model('Drink', schema);
Drink.findByName('sanpellegrino', function (err, drinks) {
  //
});
```
If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as statics.
```
show code
Schema.prototype.static = function(name, fn) {
  if (typeof name !== 'string') {
    for (var i in name) {
      this.statics[i] = name[i];
    }
  } else {
    this.statics[name] = fn;
  }
  return this;
};
```

## toJSON
```
var schema = new Schema({ name: String });
schema.path('name').get(function (v) {
  return v + ' is my name';
});
schema.set('toJSON', { getters: true, virtuals: false });
var M = mongoose.model('Person', schema);
var m = new M({ name: 'Max Headroom' });
console.log(m.toObject()); // { _id: 504e0cd7dd992d9be2f20b6f, name: 'Max Headroom' }
console.log(m.toJSON()); // { _id: 504e0cd7dd992d9be2f20b6f, name: 'Max Headroom is my name' }
// since we know toJSON is called whenever a js object is stringified:
console.log(JSON.stringify(m)); // { "_id": "504e0cd7dd992d9be2f20b6f", "name": "Max Headroom is my name" }
```