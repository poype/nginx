const http = require('http')

const server = http.createServer((req, res) => {
    res.end('I am server 8002')
})

server.listen(8002, '0.0.0.0', () => {
    console.log('server 8002 has started')
})