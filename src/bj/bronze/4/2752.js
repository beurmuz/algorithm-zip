'use strict';

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/2752.txt';

let input = fs.readFileSync(file).toString().trim().split(' ').map(Number);
input.sort((a, b) => a-b);
console.log(...input);
