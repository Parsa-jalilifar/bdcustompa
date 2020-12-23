
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
 
    username: String,
    password: String,
    email_address: String,
    phone_numer: String},
    {
        versionKey: false // remove __v property added by mongoose
    }
);
