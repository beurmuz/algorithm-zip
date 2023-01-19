"use strict";

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const solution = (input) => {
  const pos = [
    // 왼, 오, 앞, 뒤
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const [m, n] = input[0].split(" ").map((v) => +v);
  const visited = Array.from({ length: n }, () => Array(6).fill(0));
  const queue = [];
  let total = m * n; // 창고에 있는 총 토마토 상자 개수
  let days = 0; // 최소 일수 (정답)

  // 현재 창고에서 익은 토마토만 queue에 넣는다.
  for (let i = 1; i < input.length; i++) {
    input[i].split(" ").map((tomato, index) => {
      if (+tomato === 1) {
        visited[i - 1][index] = 1; // 현재 지점 방문 표시
        queue.push([i - 1, index, 0]); // 현재 i는 1부터 시작이므로 i-1 (x), 현재 index (y), 일수를 queue에 push한다.
        total--; // 익은 토마토는 바꾸지 않아도 되므로 total에서 1개 뺀다.
      } else if (+tomato === -1) {
        // 빈 상자면
        visited[i - 1][index] = 1; // 현재 지점 방문 표시 => 추후에 올 필요가 없으므로 방문 한걸로 바꾼다.
        total--; // 빈 상자는 관련이 없으므로 total에서 1개 뺀다.
      }
    });
  }

  // 너비우선 탐색 시작
  let queueIndex = 0; // queue를 shift하지 않을 것이므로 queue의 Index를 만들어준다.
  while (queue.length != queueIndex) {
    // queueIndex와 다르다는 건 queue에 남아있는 값이 더 있다는 뜻이다.
    const [x, y, day] = queue[queueIndex];

    // 4방향 탐색 (왼, 오, 위, 아래)
    for (let k = 0; k < 4; k++) {
      let nx = x + pos[k][0];
      let ny = y + pos[k][1];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue; // 범위를 벗어나면 건너뛴다.
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 1; // 방문 표시
        queue.push([nx, ny, day + 1]); // queue에 1인 지점을 또 넣어준다.
        total--; // 한 지점에 방문을 했으니 total의 개수를 줄여준다.
      }
    }
    // 한 텀이 끝나면 queueIndex를 1 증가시킨다.
    queueIndex++;
    days = day;
  }
  return total ? -1 : days;
};

console.log(solution(input));
