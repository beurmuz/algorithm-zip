'use strict';

function solution(N, M, x, y, d, map) {
    const visitedMap = Array.from(Array(N), () => Array(M).fill(0)); // 방문한 위치를 저장할 map
    visitedMap[x][y] = 1; // 현재 위치 방문 처리
    
    // 북(-1, 0), 동(0, -1), 남(1, 0), 서(0, 1)
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    // 캐릭터가 바라보고 있는 방향 -> 북(0), 동(1, 오른쪽), 남(2), 서(3, 왼쪽)
    let direction = d;  

    // 왼쪽으로 회전 -> 현재 위치에서 -1씩해야 반시계 방향으로 회전함
    function turnLeft() {
        direction = direction - 1;
        if(direction === -1) direction = 3; // 0에서 -1로 갔다는 건 서쪽을 바라보고 있다는 뜻
    }

    // 시뮬레이션
    let count = 1; // 캐릭터가 방문한 칸의 수 세기
    let turn_time = 0;

    while(1) {
        turnLeft(); // 왼쪽 방향으로 회전
        let nx = x + dx[direction]; // 
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

/*
    - 캐릭터는 동서남북 중 한 곳을 바라봄
    1. 현재 위치, 방향을 기준으로 왼쪽 방향 (반시계 방향으로)부터 이동할 곳 정하기
    2. 캐릭터의 바로 왼쪽에 아직 방문하지 않은 곳이 있다면 => 왼쪽 방향으로 회전(바라본) 후, 앞으로 한 칸 전진
    3. 4방향 모두 방문했거나 / 바다이면 => 바라본 방향을 유지한 채 뒤로 1칸 이동 후, 다시 1번부터 실행
        - 만약 뒷칸이 바다이면 => 움직임을 멈춤 
*/