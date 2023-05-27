const http = require('http');
const host='LocalHost';
const port= 8080;

//client request
const requestListiner = function(req,res){
    res.setHeader("content type","text/html");
    res.writeHead(200);
    res.end(`<html><body>h1>This is html</h1></body></html>`);
}

const server= http.createServer(requestListiner);
server.listen(port,host,()=>{
    console.log(`server is running on http:// ${host}:${port}`);
});