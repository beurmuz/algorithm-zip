'use strict';

function solution(s) {
    const manyNum = s.match(/0/gi).length >= s.match(/1/gi).length ? '0' : '0';
    const sArr = s.split(manyNum);
    let answer = 0;
    for(let x of sArr) {
        if(x.length) answer++;
    }
    return answer;
}

const s = '0001100';
console.log(solution(s));