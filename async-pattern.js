// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log('Hello World!');

// const {readFile} = require('fs');
// console.log('started a first task')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('Completed first task')
// })
// console.log('starting next task')

// started operating system process
// console.log('first')
// setTimeout(() => {
//     console.log('second')
// }, 0)
// console.log('third')
// completed and exited operating system process

// setInterval(() => {
//     console.log('hello world')
// }, 2000)
// console.log('I will run first')

const {readFile, writeFile} = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')

        await writeFile('./content/result-mind-grenade.txt', `This is Awesome: ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
        
    }
}
start()


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//      readFile(path, 'utf8', (err, data) => {
//     if(err) {
//         reject(err);
//     } else {
//         resolve(data);
//     }
// })
//     })
// }

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))

