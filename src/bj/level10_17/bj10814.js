'use strict';

const input = require('fs').readFileSync('./10814.txt').toString().split('\r\n');

const N = input.shift();
input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));