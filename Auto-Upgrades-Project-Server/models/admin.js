
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
 
    Username: String,
    Password: String,
},
    {
        versionKey: false // remove __v property added by mongoose
    }
);

module.exports = adminSchema;