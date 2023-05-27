const http = require('http');
const host= 'localhost';
const port =8000;

//CLIENT REQUEST
const requestListiner= function(request, response){

    response.writeHead(200);
    response.end(`
        'hello there!'
    `);
}
//server response
const server=http.createServer(requestListiner);
server.listen(port,host,()=>{
console.log("Server is running on http://"+ host+"port" + port)

});