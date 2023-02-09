var http = require("http");
var dt = require('./Myfirstmodule');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    // res.write("The current date is: " + dt.myDateTime());
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

