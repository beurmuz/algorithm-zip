'use strict';

function solution(s) {
    let answer = '';
    const alphabets = s.match(/[A-Z]/g).sort();
    const numbers = s.match(/[0-9]/g).sort((a, b) => a-b).reduce((acc, value) => acc += value*1, 0);
    return answer += alphabets.join('') + numbers;
}

console.log(solution('AJKDLSI412K4JSJ9D'));