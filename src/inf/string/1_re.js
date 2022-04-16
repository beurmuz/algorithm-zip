'use strict';

function solution(s){
    let answer="YES";
    s = s.toLowerCase();
    // 방법1
    // for(let i = 0; i < Math.floor(s.length/2); i++) {
    //     if(s[i]!=s[s.length-i-1]) {
    //         answer = "NO";
    //     }
    // }

    // 방법2
    if(s.split('').reverse().join('')!=s) {
        answer = "NO";
    }
    return answer;
}

let str="gooG";
console.log(solution(str));