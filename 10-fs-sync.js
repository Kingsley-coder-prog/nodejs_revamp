// const {readFileSync, writeFileSync} = require('fs');
// console.log('start');

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
// console.log('done with this task');
// console.log('starting the next one');


const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home Page')
    }
    if(req.url === '/about') {
        // blocking code
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
             console.log(`${i} ${j}`)   
            }
        }
        res.end('About Page')
    }
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})