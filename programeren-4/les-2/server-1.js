let http = require('http');

function onRequest(request,response){
    console.log('onRequest called');
    response.writeHead(404,{'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
}
http.createServer(onRequest).listen(3000);

console.log('listening on port 3000');