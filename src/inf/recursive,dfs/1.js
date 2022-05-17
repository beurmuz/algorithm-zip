'use strict';

function solution(n) {
    function recursive(n) {
        if(n === 0) {
            return; // 종료의 의미
        } else {
            recursive(n-1);
            console.log(n);
        }
    }
    recursive(n);
}

console.log(solution(3));