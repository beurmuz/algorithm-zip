'use strict';

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1292.txt';
let [A, B] = fs.readFileSync(file).toString().trim().split(' ').map(v => +v);

let sum = 0;
let index = 0;
for(let i = 1; i <= 45; i++) {
    for(let j = 0; j < i; j++) { // j는 i만큼 반복
        index++;
        if(index >= A && index <= B) sum += i;
        if(index === B) break;
    }
    if(index === B) break;
}
console.log(sum);
