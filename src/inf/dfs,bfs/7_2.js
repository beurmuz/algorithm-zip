'use strict';

function solution(n, board) {
    let answer = 0;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 12시 기준 시계방향
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let queue = [];
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) { // 시작점이면
                board[i][j] = 0; // 찾았으니 바다로 바꾸고
                queue.push([i, j]); // 출발점이 만들어짐
                answer++; 

                while(queue.length) { // 섬 하나를 탐색
                    let [x, y] = queue.shift();
                    console.log(x, y);
                    for(let k = 0; k < 8; k++) {
                        let nx = x + dx[k];
                        let ny = y + dy[k];
                        if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) { // 섬이어야만 넣을 수 있음
                            board[nx][ny] = 0;
                            queue.push([nx, ny]);
                        }
                    }
                }
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

/*
    - BFS로 풀기
    - 우선 처음에 1을 만나면 0으로 바꾸고, queue에 해당하는 좌표 값 (0, 0) 넣어주기
    - (0, 0)을 shift()한 후 8방향 검사
        - 1을 만나면 바로 0으로 바꿔준 후 queue에 넣기
        - queue에 넣은 후 0으로 바꾸면 이미 queue에 들어간 좌표가 또 들어갈 수 있음
*/