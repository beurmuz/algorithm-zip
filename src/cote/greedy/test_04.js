'use strict';

function solution(n, arr) {
    arr.sort((a, b) => a-b);
    let target = 1; // 가장 작은 정수 1부터 시작
    for (let i = 0; i < arr.length; i++) {
        if (target < arr[i]) {
            break;
        }
        target += arr[i];
    }
    return target;
}

const arr = [3, 2, 1, 1, 9];
console.log(solution(5, arr));