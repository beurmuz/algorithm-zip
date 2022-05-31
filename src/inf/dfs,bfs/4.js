'use strict';

function solution(board) {
    let answer=0;
    let dx = [-1, 0, 1, 0]; // 행
    let dy = [0, 1, 0, -1]; // 열

    function dfs(x, y) {
        if(x === 6 && y === 6) {
            answer++;
        } else {
            for(let k = 0; k < 4; k++) {
                let nx = x + dx[k];
                let ny = y + dy[k];
                if(nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) { // 경계선 처리와 board[nx][ny]가 0이면 갈 수 있게 됨
                    board[nx][ny] = 1; // 체크 걸기
                    dfs(nx, ny);
                    board[nx][ny] = 0; // 체크 풀기
                }
            }
        }
    }
    board[0][0] = 1; // 경로 탐색 시 꼭 첫번째 지점은 check를 걸어놓고 시작해야 함
    dfs(0, 0);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0],
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];
console.log(solution(arr));

/*
    0,0부터 6,6까지 시작!
*/