'use strict';

function solution(s) {
    let answer;
    let stringHash = new Map();
    for(let x of s) {
        // x, 즉 key가 있으면 해당 value값을 가져와서 1증가시킴
        if(stringHash.has(x)) {
            stringHash.set(x, stringHash.get(x)+1);
        } else {
            // key가 없으면 key,1을 세팅
            stringHash.set(x,1);
        }
    }
    // console.log(stringHash);

    // 최대값 추출
    let max = Number.MIN_SAFE_INTEGER; 
    for(let [key, value] of stringHash) {
        if(value > max) {
            max = value;
            answer = key;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));
