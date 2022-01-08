const express = require('express');
const router = express.Router();
const Response = require('../models/response');
//POST : CREATE A NEW RESPONSE

router.post('/',(req,res)=>{

    xml = new Response({
        error: req.body.error,
        code : req.body.code,
        info : req.body.info
    });

    xml.save().then(xml=>{
        res.send(xml);
    }).catch(error=>{
        res.status(500).send("XML not found");
    })
})

module.exports = router;