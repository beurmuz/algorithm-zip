'use strict';

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n1 = inputs[0].split('');
const n2 = inputs[1].split('');

console.log(+inputs[0]*n2[2]);
console.log(+inputs[0]*n2[1]);
console.log(+inputs[0]*n2[0]);
console.log(+inputs[0] * +inputs[1]);