'use strict';

function solution(input) {
    let answer = 0;
    let stack = [];

    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(') {
            stack.push(input[i]);
        } else if(input[i] === ')') {
            stack.pop();
            if(input[i-1] === '(') { // 바로 앞이 '('라는 것은 '레이저'라는 뜻 
                answer += stack.length;
                // console.log(answer);
            } else {
                answer += 1; // 막대기가 끝났으니 +1 해줘야함
            }
        }
    }
    return answer;
}

let input = '()(((()())(())()))(())';

console.log(solution(input));

/*
    조건 1) 레이저의 표현: '()'
    조건 2) 쇠막대기는 자기보다 긴 막대기 위에만 놓일 수 있음
    조건 3) 끝점은 겹치지 않게 해야함
    조건 4) 쇠막대기의 길이표현: 왼쪽 끝은 '(' 오른쪽 끝은 ')'

    1. 우선 input 길이만큼 for문 돌기
     - 만약 '('가 나오면 stack에 '(' push하기
     - 만약 ')'가 나오면 이게 막대기의 끝인지, 레이저가 끝난것인지에 상관없이 stack.pop하기
        - pop한 이후 input[i-1]이 '('라면 방금 ')'는 레이저의 끝을 의미하는 것
            - 레이저면 현재 있는 stack의 길이를 answer에 누적합
            - input[i-1]이 '('가 아니면 막대기의 끝을 의미하는 것이므로 레이저로 잘린 남은 하나를 answer+1 해주기 
*/