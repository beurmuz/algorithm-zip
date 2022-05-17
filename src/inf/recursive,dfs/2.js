'use strict';

function solution(n) {
    let answer = '';
    function recursive(n) {
        if(n === 0) {
            return;
        } else {
            // console.log()시 순차 출력
            recursive(parseInt(n/2));
            answer += String(n%2); // 여기서 출력하면 거꾸로 나옴
        }
    }
    recursive(n);
    return answer;
}

console.log(solution(11));