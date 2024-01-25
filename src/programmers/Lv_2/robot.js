/**
 * [BFS]
 * - 최단거리를 구하는 문제이므로 BFS를 활용한다.
 * - 핵심은 방문하는 지점이 G인 경우가 정답이 되는 것이다.
 */

function solution(board) {
  let answer = 0;
  board = board.map((line) => line.split(""));

  // 상하좌우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 시작지점 찾기
  let startSpot = [0, 0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        startSpot = [i, j];
        break;
      }
    }
  }

  // BFS 탐색 시작
  const queue = [startSpot];
  board[startSpot[0]][startSpot[1]] = "V"; // 방문 표시

  while (queue.length) {
    let size = queue.length;

    // 연관된 모든 지점을 한번에 검사해야한다.
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx < 0 || ny < 0 || nx >= board.length || ny >= board[0].length)
          continue;
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          board[nx][ny] !== "D"
        ) {
          // 벽을 만날 때까지 한방향으로 쭉 미끄러진다.
          nx += dx[k];
          ny += dy[k];
        }
        // 장애물을 만난 경우, 이전 지점으로 다시 되돌아간다.
        nx -= dx[k];
        ny -= dy[k];

        if (board[nx][ny] === "G") {
          // 해당 지점이 목표 지점인 경우
          return answer + 1;
        } else if (board[nx][ny] !== "V") {
          // 아직 방문하지 않은 경우
          board[nx][ny] = "V"; // 방문 표시
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }
  return -1;
}
