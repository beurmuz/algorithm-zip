"use strict";

/**
 * - 치즈 내부의 빈 칸들, 치즈 외부의 빈 칸들을 어떻게 구분할 것인지가 핵심이다.
 * - 치즈 내부 !== 치즈 외부 공기
 * - 치즈 내,외부 빈칸을 구분시키는 방법은 BFS를 활용한다. 시작 칸은 (0, 0)을 큐에 넣고 출발하면 된다.
 *   => 모든 칸들에 대해서 상,하,좌,우 칸들을 살펴보고, 빈 칸이었다면 큐에 넣고, 그 칸은 외부 공기라는 표시를 해놓으며 BFS를 진행한다. 단, 살펴본 칸이 치즈 칸(=1)인 경우 그 칸은 큐에 넣지 않는다.
 *
 * 풀이 순서
 * 1. 치즈 내, 외부 공기를 구분한다. (with BFS)
 * 2. 모든 치즈 칸을 살펴보는 데 치즈의 상, 하, 좌, 우 중 적어도 2군데 이상이 바깥 공기인지 확인하고, 맞다면 그 치즈를 녹을 대상으로 표시한다.
 * 3. 녹을 대상으로 표시된 치즈들을 전부 외부 공기로 바꿔준다.
 * 4. 치즈가 남아있는지 확인한다.
 * 5. 남아있다면 (1) ~ (3)을 또 반복한다.
 */
const [input, ...paper] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, paper) => {
  // 0: 내부 공기, 1: 치즈, 2: 외부공기, 3: 녹은 상태
  const [N, M] = input.split(" ").map((v) => +v);
  const arr = paper.map((v) => v.split(" ").map((vv) => +vv));
  const visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(1));
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 1. 치즈를 녹이기 전, 외부공기와 내부 공기를 나눈다.
  const splitAir = () => {
    const queue = [[0, 0]];
    visited.map((v) => v.fill(0));

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          !visited[nx][ny] &&
          arr[nx][ny] !== 1
        ) {
          visited[nx][ny] = 1; // 방문 표시
          arr[nx][ny] = 2; // 외부 공기
          queue.push([nx, ny]);
        }
      }
    }
  };

  // 2. 치즈를 녹이는 작업을 진행한다.
  while (1) {
    let isMelt = false;
    splitAir();

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === 1) {
          // 치즈가 1인 경우 해당 좌표 치즈(1)인 경우, 네 방향을 탐색하여 외부 공기가 2개 이상인 경우에만 녹인다.
          let count = 0;
          for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 2)
              count++;
          }
          if (count >= 2) {
            arr[i][j] = 3; // 완전히 녹아버린 상태
            isMelt = true;
          }
        }
      }
    }
    if (isMelt) {
      arr.forEach((row) => {
        row.forEach((element) => {
          // 다시 외부 공기로 바꿔준다.
          if (element === 3) element = 2;
        });
      });
    }
    answer++;

    let arrHasCheese = false;

    arr.forEach((row) => {
      row.forEach((element) => {
        if (element === 1) arrHasCheese = true;
      });
    });
    if (!arrHasCheese) break; // 치즈가 없으면 반복문 (while)문을 종료한다.
  }
  return answer;
};

console.log(solution(input, paper));
