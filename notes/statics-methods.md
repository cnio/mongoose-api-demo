# methods vs statics
[link](http://stackoverflow.com/questions/29664499/mongoose-static-methods-vs-instance-methods)

## points

- statics are the methods defined on the Model. methods are defined on the document (instance).
- Similarly you can't do fido.findByName because findByName would need to search through all documents and fido is just a document.