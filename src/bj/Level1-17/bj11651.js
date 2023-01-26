'use strict';

const input = require('fs').readFileSync('./11651.txt').toString().split('\r\n');

const N = input.shift();
const coordsArr = [];

for (let i = 0; i < N; i++) {
  coordsArr.push(input[i].split(' ').map(el => parseInt(el)));
}
// console.log(coordsArr);

let results = '';
coordsArr.sort((a,b) => {
    if(a[1] !== b[1]) {
        return a[1] -b[1];
    }
    return a[0] - b[0];
}).forEach(coords => (results += `${coords[0]} ${coords[1]}\n`));

console.log(results);