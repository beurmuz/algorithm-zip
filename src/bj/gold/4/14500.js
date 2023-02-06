"use strict";

/**
 * 1. 브루트포스로 풀기
 * - 그림을 그려보면 테트로미노를 회전하고 대칭하고 .. 하면 총 19가지의 경우가 나온다.
 * - 19가지의 경우를 모드 Math.max(첫번째 경우의 합, 두번째 경우의 합, ... ,19번째 경우의 합) 이렇게 해서 계산할 수도 있다.
 *
 * 2. dfs + 브루트포스로 풀기
 * - ㅜ를 제외하고는 왔던 길로 되돌아가는 상황이 발생하지 않기에 dfs로 풀 수 있다.
 *   => 범위 내에 있고 방문하지 않은 점이면 탐색을 이어나간다. 깊이가 4일때 answer를 갱신하고 return한다.
 * - ㅜ는 (0,0)을 기준으로 ㅗ, ㅜ, ㅓ, ㅏ인 경우를 모두 따져봐야하므로 브루트포스로 풀면 된다.
 */
const [[n, m], ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const solution = (n, m, arr) => {
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  let answer = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // 1. dfs로 ㅗ를 제외한 모든 경우 구하기
  const dfs = (x, y, sum, depth) => {
    if (depth === 4) {
      // 4개를 합한 경우
      answer = Math.max(answer, sum); // answer 값을 max값으로 갱신한다.
      return;
    } else {
      for (let k = 0; k < 4; k++) {
        let [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue; // 범위를 벗어나면 건너뛴다.
        if (!visited[nx][ny]) {
          // 범위 내에 있고, 아직 방문하지 않았다면
          visited[nx][ny] = 1; // 방문 표시
          dfs(nx, ny, sum + arr[nx][ny], depth + 1);
          visited[nx][ny] = 0; // 백트래킹, 방문 표시를 없앤다.
        }
      }
    }
  };

  // 2. dfs로 풀 수 없는 ㅗ 부분을 브루트포스로 푼다.
  const hdx = [
    // ㅗ의 x
    [0, 0, 0, 1],
    [0, 1, 2, 1],
    [0, 0, 0, -1],
    [0, -1, 0, 1],
  ];
  const hdy = [
    // ㅗ의 y
    [0, 1, 2, 1],
    [0, 0, 0, 1],
    [0, 1, 2, 1],
    [0, 1, 1, 1],
  ];
  const nodfs = (x, y) => {
    for (let i = 0; i < 4; i++) {
      let flag = true;
      let sum = 0;

      for (let j = 0; j < 4; j++) {
        let nx = x + hdx[i][j];
        let ny = y + hdy[i][j];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          flag = false; // 범위를 벗어났으므로 더이상 탐색할 필요가 없다.
          break; // 반복문을 빠져나간다.
        } else {
          // 범위 내에 있는 경우
          sum += arr[nx][ny];
        }
      }
      if (flag) {
        // flag가 true면
        answer = Math.max(answer, sum); // answer를 max값으로 갱신한다.
      }
    }
  };

  // 정답 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      visited[i][j] = 1; // 방문 표시
      dfs(i, j, arr[i][j], 1);
      visited[i][j] = 0; // 방문 해제
      nodfs(i, j);
    }
  }
  return answer;
};

console.log(solution(n, m, inputs));
