'use strict';

function solution(a, b, c){
    if(a<b) {
        var min = a;
    } else {
        var min = b;
    }

    if(min<c) {
        answer = min;
    } else {
        answer = c;
    }
    return answer;
}
console.log(solution(8, 15, 5));