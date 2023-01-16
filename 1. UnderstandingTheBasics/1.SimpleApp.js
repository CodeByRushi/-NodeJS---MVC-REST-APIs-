const http = require('http');

const server = http.createServer((req,res)=>{
    //executed when request comes from client
    console.log(req.headers, req.method, req.url);
    // console.log(res);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My page</title></head><body><h1>This is res from server</h1></body>');
    res.write('</html>');
    res.end();
    
});

server.listen(3000, ()=>{
    console.log("server started listening");
});