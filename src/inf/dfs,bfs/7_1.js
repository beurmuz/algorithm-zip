'use strict';

function solution(n, board) {
    let answer = 0;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 12시 기준 시계방향
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    function dfs(x, y) { // x, y좌표 넘겨주기
        board[x][y] = 0; // 최초지점 방문했으니 0으로 변경

        for(let k = 0; k < 8; k++) { // 격자판으로 8방향 다 탐색하기
            let nx = x + dx[k]
            let ny = y + dy[k];
            if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                console.log(nx, ny);
                dfs(nx, ny);
            }
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) { // 섬 발견
                answer++; // 처음 1을 발견했으니 answer++. answer는 dfs 호출 횟수와 같음
                // console.log(i, j); // 넘어가는 지점이 출력됨
                dfs(i, j);
                console.log('dfs end');
            }
        }
    }

    return answer;
}


let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(7, arr));