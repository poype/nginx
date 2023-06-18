const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    res.end(`I am server 8003, the url is ${url}`)
})

server.listen(8003, '0.0.0.0', () => {
    console.log('server 8003 has started')
})