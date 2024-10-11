const http = require('http');
const responseBody = 
`
<h1 style="color: green">Hello Larker!</h1>
<h2 style="color: green">Environment variable MY_VAR is ${process.env.MY_VAR || "[not set]"}</h2>
`
http.createServer().on('request', (request, response) => {
    let body = []
    request.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(responseBody)
        response.end()
        console.log(`${new Date().toISOString()} - ${request.socket.remoteAddress} ${request.method} ${request.url} ${response.statusCode}`)
    })
}).listen(8080, '0.0.0.0', () => {
    console.log(`Server is running on port 8080...`)
})
