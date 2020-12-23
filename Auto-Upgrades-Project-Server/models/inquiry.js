
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inquirySchema = new Schema({
 
    Date: String,
    Name: String,
    Description: String,
},
    {
        versionKey: false // remove __v property added by mongoose
    }
);

module.exports = inquirySchema;