const http = require('http');
const fileSystem = require('fs');

const host ='localhost';
const port =8080;


const requestListner = function(req,res){
    fileSystem.readFile('index.html', function(err,data){
        if (err){
            res.writeHead(500,{'content-type':'text/plain'});
            res.end('internal server error');
            
        }
        else
        res.writeHead(200,{'content-Type':'text/html'});
        res.end(data);
    });
    }

    
    const server = http.createServer(requestListner);
    server.listen(port,host,()=> {
        console.log("server is on http://"+ host+":"+ port)
    
    });

