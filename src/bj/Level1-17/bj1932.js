'use strict';
let input = require('fs').readFileSync('./data/1932.txt').toString().split('\r\n');

function findMaxSum(input) {
    const N = (input.shift())*1;
    let maxSum = 0;
    let sum = 0;
    for(let i = 0; i < N; i++) {
        let newInput = (input[i].split(' '));
        sum = maxSum;
        for(let j = 0; j < newInput.length; j++) {
            sum += (newInput[j])*1;
            console.log(`-----sum은??: ${sum}`);
            if(sum > maxSum) {
                maxSum = sum;
            }
            sum = maxSum;
        }
        console.log(`maxSum은: ${maxSum}`);
    }
}

findMaxSum(input);