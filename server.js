const http = require('http');
const app = require('./app');
const { port } = require('./config')

const PID = process.pid;

function log(msg) {
        console.log(`[${PID}]`, new Date(), msg);
}

// const port = process.env.PORT || 3000;
console.log(port)
const server = http.createServer(app);

server.listen(port, () => log('server listening on :' + port)
        //{
        //console.log(`Server running on port ${port}`)
        //}
)