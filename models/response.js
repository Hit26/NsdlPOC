const mongoose = require('mongoose');

// Response Schema
const ResponseSchema = new mongoose.Schema({
    response:{
        type:String,
        required:true
    }
});

module.exports = new mongoose.model('Response',ResponseSchema);