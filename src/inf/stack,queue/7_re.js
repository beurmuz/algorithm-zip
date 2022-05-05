'use strict';

function solution(required, design) {
    // 원래 짠 코드 - 스택 이용
    /* 
    let answer = "NO";
    let stack = [];
    required = required.split('');
    design = design.split('');
    for(let x of required) {
        if(design.includes(x)) {
            stack.push(x);
        } 
    }
    if(required.length === stack.length) {
        answer = "YES";
    }
    */

    // 새로 짠 코드 - 큐 이용
    let answer = 'YES';
    let queue = required.split('');
    for(let x of design) {
        if(queue.includes(x)) {
            if(x!==queue.shift()) {
                return 'NO';
            }
        }
    }
    if(queue.length > 0) {
        return 'NO';
    }
    console.log(...stack);
    return answer;
}

let requiredSubject = 'CBA';
let designCase = 'CADBGE';

console.log(solution(requiredSubject, designCase));

/*
    - 필수 과목을 배열 형태로 바꾸고, 설계된교육과정에 필수과목이 들어있으면 stack.push()
    - required의 길이와 stack의 길이가 같으면 answer는 YES

    - 단순히 inclues(x)를 하면 순서가 달라졌을 때를 감지하지 못하고 YES를 출력함
*/