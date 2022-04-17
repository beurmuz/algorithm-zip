'use strict';

function solution(s){  
    let answer;
    let stack=[];
    s = s.split('');

    let count = 0;
    for(let i of s) {
        if(i==="(") {
            count+=1;
        } else if(i===")") {
            count-=1;
        } else if(count===0) {
            stack.push(i);
        }
    }    
    answer = stack.join('');            
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));