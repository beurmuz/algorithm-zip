'use strict';

let input = require('fs').readFileSync('./8958.txt').toString().split('\r\n');
let scoreNum = input[0]*1;
let scoresArr = []; 
for(let i = 1; i < input.length; i++) {
    scoresArr.push(input[i]);
}

function scoreOX(result) {
    let sumList = [];
    for(let i = 0; i < result.length; i++) {
        let personScore = result[i].split('');
        let sum = 0;
        let count = 0;
        for(let j = 0; j < personScore.length; j++) {
            count++;
            if(personScore[j] === 'X') {
                count = 0;
            }
            sum += count;
        }
        console.log(sum);
    }
}

scoreOX(scoresArr);