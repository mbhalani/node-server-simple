// This bit is also easy, but a little bit more nuanced
// than step 1. First we need to make Node’s http
// module available for use. We do this by using require.
var http = require('http');

var port = process.env.PORT || 4008;
var ip = process.env.IP || '127.0.0.1';

// createServer method takes a callback function, which takes a
// request argument and a response argument. The request
// argument is what the server receives from the client when it
// makes a server request. The response is what you need to
// build and then send back to the client using response.end()
var server = http.createServer(function(request, response) {
  console.log('Server-REQ: received a request -:', request);

  response.end('Server-RES: this is sent back in the response');
});

// Tell's the server to listen on given port.
// arg - port number and callback.
// callback is run when the port starts listening.
server.listen(port, ip, function() {
  console.log('Server-LISTEN: on ip:port: ', ip,':', port);
});

