const express = require('express');
const path = require('path');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/', shopRoutes);
app.use('/admin', adminRoutes);


//when requested URL is invalid
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'view', '404.html'));
    // res.status(404).send('<h1>404 page not found</h1>');

});
app.listen(3000);