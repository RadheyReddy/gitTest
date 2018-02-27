var http = require('http');
var fs = require('fs');
// This is just an example HTTP server. Use your own application here.
var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hello, Mocha!');
});

// listen strats the server on the given port.
exports.listen = function(port) {
	console.log('Listening on: ' + port);
	server.listen(port);
};
var path = require('path');
console.log(paths.__dirname);

const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certificates/alice.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certificates/alice.crt'))
};

// close destroys the server.
exports.close = function() {
	server.close();
};