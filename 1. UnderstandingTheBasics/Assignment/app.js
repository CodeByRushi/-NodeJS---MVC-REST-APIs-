const http = require('http');
const users=['rushi','sandy'];
const server = http.createServer((req,res)=>{
   
    if(req.url == '/'){
        res.write('<h1>Hi!!! from server</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="user"><input type="submit"></form>')
        res.end();
    }
    if(req.url == '/user'){
        for(let i=0;i<users.length;i++){
            
            res.write(users[i].toString());
            
        }
        console.log(users);
        res.end();
    }
    if(req.url == '/create-user' && req.method=="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            var parsedBody = body.toString();
            parsedBody = parsedBody.split("=")[1];
            users.push(parsedBody);
            console.log("User are : ", users);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
       
    }



});

server.listen(3000);