'use strict';

function solution(n) {
    let d = Array.from({length: n+1}, () => 0);
    d[0] = 0;
    d[1] = 1;
    d[2] = 3;
    
    for(let i = n; i <= n; i++) {
        d[i] = (d[i-1] + 2 * d[i - 2] % 796796)
    }
    console.log(d[n]);
}

console.log(solution(3))