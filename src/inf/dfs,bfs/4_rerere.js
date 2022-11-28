function solution(board, n) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function dfs(x, y) {
    if (x === n - 1 && y === n - 1) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          nx >= 0 &&
          nx <= n - 1 &&
          ny >= 0 &&
          ny <= n - 1 &&
          board[nx][ny] === 0
        ) {
          //   console.log(`(nx, ny)는 (${nx},${ny})`);
          board[nx][ny] = 1;
          dfs(nx, ny);
          board[nx][ny] = 0; // back
        }
      }
    }
  }
  board[0][0] = 1;
  dfs(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 0, 0],
];

console.log(solution(arr, 5));
