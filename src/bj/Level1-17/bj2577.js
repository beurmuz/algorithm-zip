'use strict';

function numberOfNums(A, B, C) {
    let sum = String(A*B*C);
    let sumArr = sum.split('');
    let result = [];
    console.log(...sumArr);

    for(let i = 0; i < 10; i++) { // numArr
        let count = 0;
        for(let j of sumArr) { // sumArr에 해당 i값이 있는지 찾기
            if(j === String(i)) {
                count++;
            }
        }
        // result.push(count);
        console.log(count);
    }
}

let A = 150;
let B = 266;
let C = 427;

numberOfNums(A,B,C);