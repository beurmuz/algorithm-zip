'use strict';

function solution(s){
    let answer="";
    let cnt = 1; // 반복되는 문자의 횟수를 셀 변수
    s=s+" "; // 마지막에 E와 비교할 곳
    for(let i = 0; i < s.length-1; i++) {
        if(s[i]===s[i+1]) {
            cnt += 1;
        } else {
            answer+= s[i];
            if(cnt!=1) {
                answer+= String(cnt);
                cnt = 1;
            }
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));