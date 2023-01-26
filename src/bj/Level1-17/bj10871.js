'use strict'

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let inputs = [];
inputs = input[0].split(' ');

let total = Number(inputs[0]);
let x = Number(inputs[1]);

let numbers = [];
numbers = input[1].split(' ');

let result = '';
for (let i = 0; i < total; i++) {
  if (Number(numbers[i]) < x) {
    result += numbers[i] + ' ';
  }
}

console.log(result);