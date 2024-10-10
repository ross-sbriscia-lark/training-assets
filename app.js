const http = require('http');
var url = require("url");
var querystring = require("querystring");
const responseBody = 
`
<h1 style="color: green">Hello Larker!</h1>
<h2 style="color: green">Environment variable 'MY_VAR' value is ${process.env.MY_VAR}</h2>
`

http.createServer().on('request', (request, response) => {
    let body = [];

    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(responseBody)
        response.end();
    });
}).listen(8080, '0.0.0.0', () => {
    console.log(`Server is running on port 8080...`)
});
