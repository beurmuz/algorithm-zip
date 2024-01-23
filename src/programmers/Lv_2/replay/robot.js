/**
 * [BFS 문제]
 * - 최소 몇 번만에 도달할 수 있는가? => 최단 거리는 BFS로 풀면 된다. 그치만 어렵다!
 * - queue.length를 기억해두고, 한번 돌 때 queue.length만큼 돌아야 한다는게 어려웠다.
 * - 미끄러진다는 건 장애물을 만날 때까지 한 방향으로 쭉 간다는 뜻이다. 그래서 nx, ny에 dx[k]와 dy[k]를 더했다 뺐다 하는 것이다.
 */

function solution(board) {
  let answer = 0;

  // 상, 하, 좌, 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let grid = board.map((line) => line.split(""));

  // 로봇의 초기 위치 찾기
  let initPos = [0, 0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "R") {
        initPos = [i, j];
        break;
      }
    }
  }

  // queue에 시작점을 넣고 시작
  let queue = [initPos];
  grid[initPos[0]][initPos[1]] = "C"; // 해당 지점에 방문 시 C로 방문표시를 한다.

  while (queue.length) {
    console.log(`----NEW [${queue}], ${queue.length}`);
    let size = queue.length;

    // queue에 있는 만큼 다 돈다.
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      // 상,하,좌,우 탐색
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        console.log(`nx, ny는 ${nx}, ${ny}  | k는 ${k}`);

        // ⭐️ 범위를 벗어나면 건너뛰게끔 한다. => 시간 단축
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
          continue;
        // 범위 내에 있고, 장애물 위치가 아닌 경우
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < grid.length &&
          ny < grid[0].length &&
          grid[nx][ny] !== "D"
        ) {
          // 이 값을 벽에 부딪히거나 장애물을 만날때까지 기존 값에 미끄러짐
          nx += dx[k];
          ny += dy[k];
          console.log(`쭈욱 미끄려져요~ ${nx}, ${ny}`);
        }

        // 장애물을 만난 경우, 장애물에 부딪히기 전 칸으로 back 시킨다.
        nx -= dx[k];
        ny -= dy[k];

        // 목표 지점이면
        if (grid[nx][ny] === "G") {
          return answer + 1;
          // 방문하지 않은 경우
        } else if (grid[nx][ny] !== "C") {
          console.log(`(${nx}, ${ny})는 방문완료!`);
          grid[nx][ny] = "C"; // 방문 표시 후
          queue.push([nx, ny]); // queue에 추가한다. (해당 지점에서 방문 가능한 모든 지점이 queue에 추가된다.)
        }
      }
    }
    answer++;
    console.log(`answer가 갱신되었다! ${answer}`);
  }
  return -1;
}
