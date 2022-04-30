'use strict';

function solution(s){
    let answer = 'NO';
    s = s.split('');
    let stack1 = [];
    let stack2 = [];

    for(let i of s) {
        if(i === '(') stack1.push(i);
        else stack2.push(i);
    }
    if(stack1.length === stack2.length) answer = 'YES';
    return answer;
}

let a="(()(()))(())";
console.log(solution(a));

/*
    1. 우선 a를 split해서 배열형태로 바꿔주기
    2. s.length만큼 반복문을 돌면서 '('가 들어오면 stack1에 push, ')'가 들어오면 stack2에 push하기
    3. stack1과 stack2의 길이가 같으면 answer에 YES를, 아니면 NO를 넣기
*/