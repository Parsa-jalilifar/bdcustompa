
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
 
    ContentType: String,
    Image: Buffer,
},
    {
        versionKey: false // remove __v property added by mongoose
    }
);

module.exports = imageSchema;