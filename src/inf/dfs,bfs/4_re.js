'use strict';

function solution(board) {
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    function dfs(x, y) {
        if(x === 6 && y === 6) {
            answer++;
        } else {
            for(let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) { // 범위 조절
                    board[nx][ny] = 1;
                    dfs(nx, ny);
                    board[nx][ny] = 0;
                }
                
            }
        }
    }
    board[0][0] = 1;
    dfs(0,0);
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
    - 0,0 ~ 6,6까지 
    - 1은 벽이고 0은 통로
    - 해당 노드에 방문 후 0을 1로 변환해주면 되므로 따로 체크배열이 필요없음
    - 한 노드를 기점으로 격자판이 상하좌우로 움직여야 하므로 격자판 배열이 필요함
        - 12시부터 시계방향으로 (-1, 0), (0, 1), (1, 0), (0, -1)이므로
        - dx = [-1, 0, 1, 0]
        - dy = [0, 1, 0, -1]
*/