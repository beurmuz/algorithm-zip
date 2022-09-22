'use strict';

function solution(n, t, m, p) {
    let answer = '';
    let queue = [];
    let currentNumber = -1;
    let turn = 0;
    
    while(answer.length < t) {
        if(queue.length === 0) {
            currentNumber++;
            currentNumber.toString(n).split('').forEach((x) => queue.push(x));
        }
        const currentChar = queue.shift();
        if (turn % m === p - 1) answer += currentChar
        turn++
    }
    return answer.toUpperCase();
}