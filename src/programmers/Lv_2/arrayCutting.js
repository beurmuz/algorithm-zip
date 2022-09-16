'use strict';
// 어 이해 안되는데요

function solution(n, left, right) {
    let arr = [];
    for(let i = left; i <= right; i++) {
        let j = Math.floor(i/n) - i%n;
        j = j < 0 ? 0 : j;
        arr.push(i%n+1+j);
    }
    return arr;
}

function solution(n, left, right) {
    let answer = [];
    for(let i = left; i <= right; i++)
        answer.push(Math.max(Number.parseInt(i / n), i % n) + 1);
    return answer;
}