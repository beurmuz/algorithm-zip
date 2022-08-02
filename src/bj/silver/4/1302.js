'use strict';

// 내 풀이 - 런타임 에러남
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1302.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let map = new Map();
input.forEach((v) => {
    map.set(v,(map.get(v) || 0) +1);
});

let sellCount = 0; 
let answer = '';
for(let [key, value] of map) {
    if (value === sellCount && key < answer) answer = key;
    if (value > sellCount) {
        sellCount = value;
        answer = key;
    } 
}
console.log(answer);


// 다른 풀이
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1302.txt';
const arr = fs.readFileSync(file).toString().trim().split('\n');
const n = arr.shift();

let maxCount = 0;
let maxName = "";
const dict = {};
arr.forEach(name => {
    if (dict[name]) dict[name]++;
    else dict[name] = 1;
    if (dict[name] === maxCount && name < maxName) maxName = name;
    else if (dict[name] > maxCount) {
        maxName = name;
        maxCount = dict[name];
    }
});
console.log(maxName);
