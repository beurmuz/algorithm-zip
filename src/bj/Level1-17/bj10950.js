// 10950번, A+B-3

'use strict'
let input = require('fs').readFileSync('./10950.txt').toString().split('\n');
for (let i = 1; i <= input[0]; i++) {    
    let numbers = input[i].split(' ');
    console.log(numbers);
    console.log(Number(numbers[0]) + Number(numbers[1]));
}