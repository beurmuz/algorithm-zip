'use strict';

function solution(s, t){
    let answer=[];
    let p= 100;
    for(let x of s) {
        if(x === t) {
            p = 0;
        } else {
            p++;
        }
        answer.push(p);
        // console.log(p);
    }
    
    let p2 = 100;
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i]===t) {
            console.log("e와 같음");
            p2 = 0;
            console.log(p2);
        } else {
            p2+=1;
            if(answer[i]>p2) {
                answer[i] = p2;
            }
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));