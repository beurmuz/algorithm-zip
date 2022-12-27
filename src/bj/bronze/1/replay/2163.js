'use strict';

let [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
[n, m] = [+n, +m];

let answer = n * (m-1) + (n-1);
console.log(answer);