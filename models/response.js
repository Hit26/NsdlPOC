const mongoose = require('mongoose');

// Response Schema
const ResponseSchema = new mongoose.Schema({
    // error:{
    //     type:Number
    // },
    // code:{
    //     type:Number
    // },
    // info:{
    //     type:JSON
    // }
    requestBody:{
        type:Object 
    }
});

module.exports = new mongoose.model('Response',ResponseSchema);