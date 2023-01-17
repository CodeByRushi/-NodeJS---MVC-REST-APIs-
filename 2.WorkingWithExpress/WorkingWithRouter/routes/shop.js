const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','shop.html'));
    // res.send('<h1>HI from my SHOP</h1>');
});

module.exports = router;