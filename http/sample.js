var http = require('http');

var requestListener = function( req, res)
{
    
        res.writeHead(200);
        res.end("<h1> Hello</h1>")
   
};
var server =http.createServer(requestListener);
server.listen("5000");