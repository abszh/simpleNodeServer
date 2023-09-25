const http = require('http');

let memory = 'default text';
const editUrl = '/edit/';

// the callback function is called every time a request comes in
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'json');
    res.statusCode = 200;
    if (req.url.startsWith(editUrl)) {
        memory = decodeURI(req.url.substring(editUrl.length));
        console.log(memory);
    }
    res.end(memory);
});

// the callback function is called when the server starts listening
server.listen(3000, '0.0.0.0', () => {
    console.log('listening for requests on port 3000');
});
