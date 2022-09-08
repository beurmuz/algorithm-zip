'use strict';

function solution(s) {
    let answer = [];
    let zeroCount = 0;
    let transformCount = 0;
    
    while(s != '1') {
        if(s === '1') break;
        zeroCount += s.match(/[0]/g)?.length ? s.match(/[0]/g)?.length : 0;
        s = s.match(/[1]/g).join('');
        s = s.length.toString(2)
        transformCount++;
    }
    answer = [transformCount, zeroCount];
    return answer;
}