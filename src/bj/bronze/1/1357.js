'use strict';

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1357.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');
let answer = 0;

for(let i = 0; i < input.length; i++) {
    answer += Rev(input[i]);
}

console.log(Rev(''+answer));

function Rev(x) {
    x = x.split('').reverse().join('');
    return +x;
}