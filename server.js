var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(9000);

console.log("Server running");

var BinaryServer = require('binaryjs').BinaryServer,
    fs = require('fs');

// Create a BinaryServer attached to our existing server
var binaryserver = new BinaryServer({server: server, path: '/binary-endpoint'});

binaryserver.on('connection', function(client){
  var file = fs.createReadStream(__dirname + '/path to your video file');
  client.send(file);
});
