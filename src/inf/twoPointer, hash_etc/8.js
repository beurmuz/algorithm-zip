'use strict';

function solution(str, word) {
    let answer;
    for (let i = 0; i < str.length; i++) {
        for(let j = i; j < word.length; j++) {
            console.log(`3개씩: ${str[j]}`);
        }
        console.log('----');
    }

    return answer;
}

let s = 'bacaAacba';
let t = 'abc';
console.log(solution(s,t));

/*
    부분된 문자열은 연속된 문자열이어야하며, 아나그램이어야 함
    1. 부분 문자열부터 구현하기 
     - 이중 for문으로 i는 s.length까지, j는 i부터 t.length까지 반복

*/