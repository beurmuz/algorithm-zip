'use strict';

function solution(s){  
    let answer;
    s = s.split('');
    let stack = [];
    let count = 0;

    for(let x of s) {
        if(x ==='(') count++;
        else if(x ===')') count--;
        else if(count===0) stack.push(x);
    }
    answer = stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

/*
    1. 우선 s를 배열형태가 되도록 split 해주기
    2. for문 내에서
     - '('를 만나면 count를 1 증가시킴
     - ')'를 만나면 count를 -1 감소시킴
     - 만약 count가 0이면 그때 x를 stack에 push
       (count가 0이라는 건 괄호밖에 있다는 뜻)
*/