'use strict';

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/파일명';
const input = fs.readFileSync(file).toString().trim().split(' ');
console.log(input[0] === "" ? 0 : input.length);