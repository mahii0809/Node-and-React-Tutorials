var http = require('http');

var requestListener = function( req, res)
{
    if(req.url=='/register'){
        res.writeHead(200);
        res.end("<h1> Hello </h1> <input type='file'/>" )
    }
    else{
        res.writeHead(200);
        res.end("<h1>Error</h1>")
    }
};
var server =http.createServer(requestListener);
server.listen("3000");