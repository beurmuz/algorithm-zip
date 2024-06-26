'use strict';

function solution(s){  
    let answer;
    let stack=[];
    s = s.split('');
    let left = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            left+=1;
            // console.log(`left는 +1해서 ${left}이고, i값은 ${s[i]}`);
        }else if(s[i] === ")") {
            left-=1;
            // console.log(`left는 -1해서 ${left}이고, i값은 ${s[i]}`);
        }else if(left===0) {
            stack.push(s[i]);
        }
    }
    answer = stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));