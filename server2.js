const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    res.end(`I am server 8002, the url is ${url}`)
})

server.listen(8002, '0.0.0.0', () => {
    console.log('server 8002 has started')
})