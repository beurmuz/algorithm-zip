'use strict';

function solution(n) {
    let answer = 1;
    function recursive(n) {
        if(n === 0) {
            return;
        } else {
            answer *= n;
            recursive(n-1);
        }
    }
    recursive(n);
    return answer;
}

console.log(solution(5));