'use strict';
const [a, b, v] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map((v) => +v);
let days = 0;
days = Math.ceil((v - b) / (a - b));
console.log(days);
