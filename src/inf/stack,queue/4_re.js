'use strict';

function solution(input) {
    let answer = 0;
    let stack = [];

    for(let i = 0; i < input.length; i++) {
        if(!isNaN(input[i])) {
            stack.push(Number(input[i]));
        } else {
            let rightValue = stack.pop();
            let leftValue = stack.pop();
            switch(input[i]) {
                case '+': 
                    stack.push(leftValue + rightValue);
                    break;
                case '-':
                    stack.push(leftValue - rightValue);
                    break;
                case '*': 
                    stack.push(leftValue * rightValue);
                    break;
                case '/':
                    stack.push(leftValue / rightValue);
                    break;
                default:
                    console.log(error);
            }
        }
    }
    answer = stack[0];
    return answer;
}

let input = '342+*9-';

console.log(solution(input));

/*
    Q. 후위연산식?
    A. 쉽게말해 연산자를 피연산자 뒤로 보내는 방법

    1. for문을 이용해 input 돌기
    2. if) input의 현재 값이 Number(숫자)이면 Number로 형변환하고 stack에 push
    3. else) input의 현재 값이 Number가 아니면 stack에 쌓인 값 2개 pop해서 rightValue, leftValue에 저장하기 
            - switch문으로 어떤 연산자인지 찾고 해당 연산자를 이용해서 rightValue, leftValue 계산하기
            - 계산한 값 다시 stack에 push
    4. 마지막에 answer에 stack의 0번째 값 복사
*/