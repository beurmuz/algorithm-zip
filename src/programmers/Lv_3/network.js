"use strict";

/**
 * 처음에 푼 풀이
 * - 섬나라 아일랜드랑 똑같다고 생각해서, 덩어리를 카운팅했다.
 * => 근데 정확성이 15.4 / 100.0 나왔다;; 😅
 * => 생각해보면 n=3, [[1, 0, 1], [0, 1, 0], [1, 0, 1]]일 때 네트워크의 수는 2가 나와야하는데, 내 풀이법으로는 5가 나온다.
 */
const solution = (n, computers) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0]; // 상우하좌
  let dy = [0, 1, 0, -1];

  const dfs = (x, y) => {
    computers[x][y] = 0; // 방문 표시
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && computers[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        answer++;
        dfs(i, j);
      }
    }
  }

  return answer;
};

/**
 * 다시 풀기
 */
const solution2 = (n, computers) => {
  let answer = 0;
  const visited = Array.from({ length: n }, () => 0); // 방문 여부를 기록

  const dfs = (index) => {
    visited[index] = 1; // 방문 체크

    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] && visited[i] === 0) {
        // 해당 컴퓨터와 연결되어 있고 아직 방문하지 않았으면 방문한다.
        // console.log(`index: ${index},  i: ${i}`);
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      // i에 아직 방문하지 않았다면 방문한다.
      //   console.log(`---- dfs(${i}) 시작 ----`);
      dfs(i);
      answer++;
    }
  }
  return answer;
};
