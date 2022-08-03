'use strict';

const file = process.platform === 'linux' ? '/dev/stdin' : './data/1316.txt';
const [n, ...arr] = require('fs').readFileSync(file).toString().trim().split('\n');

let answer = 0;

let forCheck = [];
let deduplication = [];
for(let x of arr) {
    let f_check = [];
    let d_check = [];
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== x[i+1]) f_check.push(x[i]); 
        if(!d_check.includes(x[i])) d_check.push(x[i]);
    }
    forCheck.push(f_check);
    deduplication.push(d_check);
}

for(let i = 0; i < n; i++) {
    if(forCheck[i].length === deduplication[i].length) answer++;
}

console.log(answer);