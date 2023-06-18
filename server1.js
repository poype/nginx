const http = require('http')

const server = http.createServer((req, res) => {
    res.end('I am server 8001')
})

server.listen(8001, '0.0.0.0', () => {
    console.log('server 8001 has started')
})