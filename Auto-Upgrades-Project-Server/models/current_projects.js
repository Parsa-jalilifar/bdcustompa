var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Image = require('./image.js');

var currentSchema = new Schema({
 
    Make: String,
    Model: String,
    Year: String,
    Color: String,
    Body_Style: String,
    Engine_Transmission: String,
    Description: String,
    Images: [Image],
},
    {
        versionKey: false // remove __v property added by mongoose
    }
);

module.exports = currentSchema;