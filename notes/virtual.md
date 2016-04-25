```
personSchema.virtual('id')
    .get(function () {
        if (typeof this._id == 'object')
            p('inner')
            return this._id.toHexString();
        p('out')
        return this._id
    });
```