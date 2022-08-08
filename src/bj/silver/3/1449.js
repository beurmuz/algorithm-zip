'use strict';

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, L] = input.shift().split(' ').map(v => +v);
let location = (input+'').split(' ').sort((a,b) => a-b).map(v => +v);

// 구멍난 위치부터 테이프를 고칠 수 있는 범위
let fix = 0;
let count = 0;
for(let i = 0; i < N; i++) {
    // fix보다 작거나 같은 구멍난 위치는 하나의 테이프로 해결 가능
    if(fix < location[i]) {
        // 하나의 테이프로 고칠 수 있는 범위가 아니면 (길이 초과시) 새 테이프 필요
        count++;
        fix = location[i] + L - 1; // 구멍난 위치 + 테이프 길이 - 1(0.5+0.5);
    }
}
console.log(count);