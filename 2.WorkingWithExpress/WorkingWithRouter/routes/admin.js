const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // console.log(path.join(__dirname, '../', 'view', 'add-product.html'));
    res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'));
    // res.send('<h1>HI from my admin</h1>');
});
router.post('/add-product', (req, res, next) => {
    console.log("Data Entered is :", req.body.title);
    // res.send('<h1>HI from my admin -> add-product</h1>');
    res.redirect('/');
});

module.exports = router;