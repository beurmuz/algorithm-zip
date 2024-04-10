/**
 * [구현 , 깊이우선탐색]
 */

let [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, arr) => {
  arr = arr.map((line) => line.split(" ").map((v) => +v));
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let dx = [0, 1]; // 오, 아래
  let dy = [1, 0];

  let answer = 0;
  let maxDepth = N === 2 ? 2 : 4;

  const dfs = (L, sum) => {
    // console.log(`dfs(${L}, ${sum})`);
    if (L === maxDepth) {
      // console.log(`---sum: ${sum}`);
      answer = Math.max(answer, sum);
      return;
    }

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (visited[x][y]) continue;
        // console.log(`x: ${x}, y: ${y}`)

        for (let k = 0; k < 2; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];

          if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
            visited[x][y] = true;
            visited[nx][ny] = true;
            dfs(L + 1, sum + arr[x][y] + arr[nx][ny]);
            visited[x][y] = false;
            visited[nx][ny] = false;
          }
        }
      }
    }
  };
  dfs(0, 0);

  return answer;
};

console.log(solution(+N, arr));
