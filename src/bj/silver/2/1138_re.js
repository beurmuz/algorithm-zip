'use strict';

/*
    오 이거 어려운데?
*/

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +inputs.shift();
const moreTall = (''+inputs).split(' ').map((v) => +v);
const answer = Array(n).fill(0);

for(let heightOrder = 1; heightOrder <= n; heightOrder++) {
    let count = 0; 
    let peopleCount = moreTall[heightOrder-1]; // 2 1 1 0
    
    // console.log(`new heightOrder is ... ✅${heightOrder} `);
    for(let index = 0; index < n; index++) {
        // console.log(`index is ... ${index} , peopleCount: ${peopleCount}, count: ${count}, answer: ${[...answer]}`);
        if(peopleCount === count && answer[index] === 0) {
            answer[index] = heightOrder;
            break;
        } else if (answer[index] === 0){
            console.log(`answer의 index ${index}가 0이다!`);
            count++
        }
    // console.log(`index is ... ${index} , peopleCount: ${peopleCount}, count: ${count}, answer: ${[...answer]}`);
    }
}
console.log(answer.join(' '));