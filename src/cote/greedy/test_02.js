'use strict';

function solution(s) {
    let acc = s[0]*1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === '0' || acc === 0) acc += (s[i])*1;
        else acc *= s[i];
    }
    return acc;
}

const s = '20984';
console.log(solution(s));