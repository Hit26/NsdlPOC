const mongoose = require('mongoose');

// Response Schema
const ResponseSchema = new mongoose.Schema({
    requestBody:{
        type:String
    }
});

module.exports = new mongoose.model('Response',ResponseSchema);