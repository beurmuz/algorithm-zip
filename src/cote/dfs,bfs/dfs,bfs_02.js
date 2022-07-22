'use strict';

function solution(N, M, miro) {
    const graph = [];
    miro.split('\n').forEach((v) => {
        const ele = v.split('').map((i) => +i);
        graph.push(ele);
    });

    const visit = Array.from({length: N}, () => Array(M).fill(0));
    visit[0][0] = 1; // 첫번째 칸 방문처리

    const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
    const dy = [0, 0, -1, 1];

    function bfs(row, col) {
        const queue = [];
        queue.push([row, col]);
        visit[row][col] = 1; // 현재 위치 방문 처리

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let i = 0; i < 4; i++) { // 4방향 탐색 시작
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; // 미로를 벗어나는 좌표는 건너뜀
            if (graph[nx][ny] && !visit[nx][ny]) { // 길이 있고(값이 1이고), 아직 방문하지 않았다면
              visit[nx][ny] = visit[x][y] + 1; // (x,y)좌표의 값이 (x,y)까지 최단경로에 해당한다.
              queue.push([nx, ny]); // 현재 위치에서 갈 수 있는 좌표를 모두 큐에 넣기
            }
          }
        }
      }
      bfs(0, 0);
      return visit[N - 1][M - 1];
}

console.log(solution(3, 3, '110\n010\n011'));