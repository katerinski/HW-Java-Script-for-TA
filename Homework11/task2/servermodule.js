const http = require("http");
const os = require("os");
const greeting = require('./personalmodule');
const port = 8000;

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`Today date: ${greeting.date}<br>`);
    response.write(greeting.showMessage(os.userInfo().username));
    response.end();
});

server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});