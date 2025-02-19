const EventEmitter = require('events')


const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received suser is ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`Some other logc here`)
})

customEmitter.emit('response', 'John', 34)


// const http = require('http');

// Using Event Emitter API
// const server = http.createServer()

// emits request event
// subcribe to it / listen for it / respond to it

// server.on('request', (req, res) => {
//     res.end('Welcome')
// })
// server.listen(5000)