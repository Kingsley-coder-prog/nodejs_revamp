const path = require('path');

console.log(path.sep);
const filePath = path.join('/content', 'sub-folder', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'sub-folder', 'text.txt'); // this will give the absolute path
console.log(absolute);