const http = require('http');
const fs = require('fs');

const requestHandler = function(req,res){
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        //.on() is a event listener, for below case waiting for 'data' event. and then run its callback
        req.on('data', (chunk) => {
        //'data' event says data is receiving  
        //   console.log(chunk);
        body.push(chunk);
        });
        return req.on('end', () => {
        //The ‘end’ Event in a Readable Stream is emitted when there is no available data to be consumed from the readable stream.
        console.log(body);  //raw data
        const parsedBody = body.toString();//converting raw binary data to string
        console.log(parsedBody);
        fs.writeFileSync('message.txt', parsedBody);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

exports.requestHandler = requestHandler;