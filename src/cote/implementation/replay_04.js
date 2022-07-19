'use strict';

function solution(N, M, x, y, d, map) {
    let visited = Array.from({length: N}, () => Array(M).fill(0));
    
    // 방문한 위치 체크
    visited[x][y] = 1;
    const dx = [-1, 0, 1, 0]; // 북, 동, 남, 서 
    const dy = [0, -1, 0, 1];
    
    let direction = d;
    function turnLeft() {
        direction -= 1;
        if(direction === -1) direction = 3;
    }

    let answer = 1; // 이미 x,y는 방문했기 때문
    let turnTime = 0;

    while(1) {
        turnLeft();
        let nx = x + dx[direction];
        let ny = y + dy[direction];

        if(visited[nx][ny] === 0 && map[nx][ny] === 0) { // 아직 방문하지 않았고 육지라면,
            visited[nx][ny] = 1; // 방문 표시
            x = nx; // 현재 위치 바꿔주기
            y = ny;
            answer++;
            turnTime = 0;
        } else {
            turnTime += 1;
        }

        // 4방향 모두 갈 수 없다면
        if(turnTime === 4) {
            nx = x - dx[direction]; // 원래 위치로
            ny = y - dx[direction]; // 원래 위치로

            if(map[nx][ny] === 0) { // 뒤로 갈 수 있다면
                x = nx;
                y = ny;
            } else {
                break;
            }
            turnTime = 0;
        }
    }
    return answer;
}

let map = [[1, 1, 1, 1],
           [1, 0, 0, 1],
           [1, 1, 0, 1],
           [1, 1, 1, 1]];
console.log(solution(4, 4, 1, 1, 0, map));