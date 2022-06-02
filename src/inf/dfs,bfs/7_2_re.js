'use strict';

function solution(n, board) {
    let answer = 0;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let queue = [];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) {
                board[i][j] = 0;
                queue.push([i, j]);
                answer++;

                while(queue.length) {
                    let [x, y] = queue.shift();
                    console.log(x, y);
                    for(let k = 0; k < 8; k++) {
                        let nx = x + dx[k];
                        let ny = y + dy[k];
            
                        if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                            board[nx][ny] = 0;
                            queue.push([nx, ny]);
                        }
                    }
                }
                console.log('bfs end');
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

/*
    - bfs로 풀기
    - 한 노드마다 주변의 8개 노드 검사하기 (12시 기준 시계방향)
*/