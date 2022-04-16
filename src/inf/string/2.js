'use strict';

function solution(s){
    let answer="YES";
    s = s.toLowerCase().replace(/[^a-z]/g, ''); // 소문자 알파벳만 추출
    // console.log(s);
    // let reverseStr = s.split("").reverse();
    // for(let i = 0; i < s.length; i++) {
    //     if(s[i] === reverseStr[i]) {
    //         // console.log("str: ", s[i], reverseStr[i]);
    //     } else {
    //         answer = "NO";
    //     }
    // }

    // 방법[2] for문을 사용하지 않고 푸는 방법
    if(s.split('').reverse().join('')!==s) {
        return "NO";
    }
    return answer;
}
let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));