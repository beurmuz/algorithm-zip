'use strict';

function solution(x) {
    let d = Array.from({length: x+1}, () => 0);
    for(let i = 2; i < x+1; i++) {
        // 현재 값에서 1을 빼는 경우
        d[i] = d[i-1] +1; 
        
        if(i%2 === 0) d[i] = Math.min(d[i], d[i/2]+1);
        if(i%3 === 0) d[i] = Math.min(d[i], d[i/3]+1);
        if(i%5 === 0) d[i] = Math.min(d[i], d[i/5]+1);
    }
    return d[x];
}

console.log(solution(26));