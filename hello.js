var http= require('http');
var url =require('url');
http.createServer(function(req,res){
    var page= url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{'Content-Type':'text/html'} );
    res.end('<p><strong>Hello</strong> World</p>');
}).listen(8080,'127.0.0.1');
console.log('server running  at http://127.0.0.1 ');
