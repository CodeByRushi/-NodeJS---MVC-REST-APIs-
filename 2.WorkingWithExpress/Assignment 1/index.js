const express = require('express');
const app = express();
/*
app.use((req,res,next)=>{
    console.log("Middleware 1 ");
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware 2 ");
    res.send("Hi from server's 2nd Middleware");
});
*/
app.use('/user',(req,res,next)=>{
    res.send("This is /user");
});

app.use('/',(req,res,next)=>{
    res.send("This is / home");
});

app.listen(3000);





/*
app.get('/user/:id', (req, res, next) => {
    
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular')
  });
  
  // handler for the /user/:id path, which sends a special response
  app.get('/user/:id', (req, res, next) => {
    res.send('special')
  });

*/