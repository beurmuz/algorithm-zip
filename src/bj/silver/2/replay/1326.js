"use strict";

const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const arr = inputs[0].split(" ").map((v) => +v);
  const [a, b] = inputs[1].split(" ").map((v) => +v - 1);

  const bfs = (start) => {
    const visited = Array.from({ length: n }, () => false);
    const queue = [[start, 0]];
    visited[start] = true; // 방문 표시

    while (queue.length) {
      const [nowIdx, count] = queue.shift();

      // 현재 nowIdx b와 같은 경우, count(점프 횟수)를 return한다.
      if (nowIdx === b) return count;
      // arr[nowIdx] 값이 1이면 1의 배수이므로 count + 1한 값을 return한다.
      if (arr[nowIdx] === 1) return count + 1;

      // b < a인 경우
      // nowIdx에서 nowIdx 위치의 값을 뺀 곳에서 시작하여,
      // 0보다 크거나 같을때까지 nowIdx위치의 값만큼 빼면서(현재 위치의 배수만큼 떨어져 있는 곳만 갈 수 있으므로) 갈 수 있는 곳을 찾는다.
      for (
        let nextIdx = nowIdx - arr[nowIdx];
        nextIdx >= 0;
        nextIdx -= arr[nowIdx]
      ) {
        if (nextIdx === b) return count + 1; // 바로 찾는 경우
        if (!visited[nextIdx]) {
          visited[nextIdx] = true;
          queue.push([nextIdx, count + 1]);
        }
      }

      // a < b인 경우
      for (
        let nextIdx = nowIdx + arr[nowIdx];
        nextIdx <= n;
        nextIdx += arr[nowIdx]
      ) {
        if (nextIdx === b) return count + 1;
        if (!visited[nextIdx]) {
          visited[nextIdx] = ture;
          queue.push([nextIdx, count + 1]);
        }
      }
    }
    return -1;
  };
  return bfs(a);
};

console.log(solution(+n, inputs));
