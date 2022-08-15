'use strict';

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = inputs.shift().split(' ');
// const nList = inputs.slice(0,+n);
// const mList = inputs.slice(n);
nameList = inputs.sort();
let answer = [];
const hash = new Map();

for(let key of nameList) {
    if(hash.has(key)) hash.set(key, hash.get(key)+1);
    else hash.set(key, 1);
}

for(let [key, value] of hash) {
    if(value > 1) answer.push(key);
}

console.log(answer.length);
console.log(answer.join('\n'));