'use strict';

function solution(board, moves) {
    let answer = 0;
    let stack = [];

    moves.forEach(position => {
        for(let i = 0; i < board.length; i++) {
            if(board[i][position-1]!==0) {
                let nowValue = board[i][position-1];
                board[i][position-1] = 0; // 빼줬으니 빈칸으로 만들어줌
                // console.log(`nowValue는 ${nowValue}, stack의 값은 ${stack[stack.length-1]}`);
                if(nowValue === stack[stack.length-1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(nowValue);
                break;
            }
        }
    });

    return answer;
}

let board = [[0,0,0,0,0],
             [0,0,1,0,3],
             [0,2,5,0,1],
             [4,2,4,4,2],
             [3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));

/* 
    1. forEach로 moves의 길이만큼 돌기
    2. forEach 반복문 내에서 board 반복문 돌기
    3. 이중 반복문 내에서 moves의 현재 값에 -1해서 열에 들어감 (moves는 board의 0번째를 1번째 위치로 인식하고 있기 때문)
     - 만약 board[i][position-1]이 0이면 값을 뺄수 없으므로, 이 값이 0이 아닌 구간일때로 조건을 걸어야함
     - 현재 board[i][position-1]의 값을 nowValue에 복사해놓은 뒤, 일단 값을 뺐다고 생각하고 board[i][position-1]을 0으로 만들어줌
     - nowValue와 현 stack의 가장 위에 저장되어있는 값이 같은지 비교하기
        - 만약 값이 같다면 맞붙어있는 중복은 사라져야하므로 stack.pop()을 해준 후 answer에 +2 해주기
        - 값이 다르다면 stack에 push하기
     - 이 모든 작업이 끝나면 더이상 반복문을 돌 필요가 없으므로 break하기
*/