'use strict';

function solution(N, M, x, y, d, map) {
    // 방문한 위치를 저장할 map
    const visitedMap = Array.from(Array(N), () => Array(M).fill(0)); 

    visitedMap[x][y] = 1; // 방문 처리
    
    // 북, 동, 남, 서
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    let direction = 0;

    // 왼쪽으로 회전
    function turnLeft() {
        direction -= 1;
        if(direction == -1) direction = 3;
    }

    // 시뮬레이션
    let count = 1;
    let turn_time = 0;

    while(1) {
        turnLeft();
        let nx = x + dx[direction];
        let ny = y + dy[direction];

        // 회전 후 정면에 가보지 않은 칸이 존재하는 경우 이동함
        if(visitedMap[nx][ny] === 0 && map[nx][ny] === 0) {
            visitedMap[nx][ny] = 1; // 방문 표시
            x = nx; // 현재 위치 저장
            y = ny; // 현재 위치 저장
            count++;
            turn_time = 0;
            continue;
        } else {
            turn_time += 1;
        }

        // 네 방향 모두 갈 수 없는 경우
        if(turn_time === 4) {
            nx = x - dx[direction];
            ny = y - dy[direction];

            // 뒤로 갈 수 있다면 이동하기
            if (map[nx][ny] === 0) {
                x = nx;
                y = ny;
            } else {
                break;
            }
            turn_time = 0;
        }
    }
    return count;
}

let map = [[1, 1, 1, 1],
           [1, 0, 0, 1],
           [1, 1, 0, 1],
           [1, 1, 1, 1]];
console.log(solution(4, 4, 1, 1, 0, map));