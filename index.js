const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const respRoutes = require('./routes/responses');


const app = express();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/responses',respRoutes);

//connect to mongodb atlas
mongoose.connect("mongodb+srv://Hiteshj2612:Hitesh2612@cluster0.5mdsu.mongodb.net/xmldb?retryWrites=true&w=majority",{useNewUrlParser:true}).then(()=>{
    console.log("Connected to database");
}).catch(error=>{
    console.log("Something went wrong!!!");
})


app.listen(PORT,()=>{
    console.log("Server started on", {PORT});
})