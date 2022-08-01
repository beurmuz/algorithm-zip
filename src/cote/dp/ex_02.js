'use strict';

function solution(n, str) {
    let d = Array.from({length: n+1}, () => 0);
    const arr = str.split(' ').map(v => +v);
    d[0] = arr[0];
    d[1] = Math.max(arr[0], arr[1]);

    for(let i = 2; i < n; i++) {
        d[i] = Math.max(d[i-1], d[i-2]+arr[i]);
    }
    return d[n-1];
}

const warehouse = '1 3 1 5';
console.log(solution(4, warehouse));