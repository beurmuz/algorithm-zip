'use strict'

let input = Number(require('fs').readFileSync('/dev/stdin').toString().split(' '));

let num = input;
let sum;
let count = 0;

while (true) {
	count++;

    // 주어진 수 합
    sum = Math.floor(num / 10) + num % 10;
    // 주어진 수의 오른쪽 자릿수 + 새로운 수의 오른쪽 자릿수
    num = (num % 10) * 10 + sum % 10;
    
    // 주어진수 === 새로운 수 루프 탈출
    if (input === num) break;
}