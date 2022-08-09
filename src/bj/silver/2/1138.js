'use strict';
//ㅇ ㅣ해 못했다.... 왜 배열이 비어있을때만 카운트하지?

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift()*1;
const inputs = (''+input).split(' ');
let heightArr = Array(N).fill(0);

for(let i = 1; i <= N; i++) { // i는 키의 순서 의미 
    let leftNums = +inputs[i-1];
    let count = 0;
    
    // j는 배열의 인덱스
    for(let j = 0; j < N; j++) {
        // count와 leftNums가 같고, heightArr[j]가 빈칸인 경우
        if(count === leftNums && heightArr[j] === 0) {
            heightArr[j] = i; // 현재 키 값 넣기
            break;
        } else if (heightArr[j] === 0) { // 배열이 비어 있을 때에만 카운트 
            count += 1;
        }
    }
}

console.log(heightArr.join(' '));