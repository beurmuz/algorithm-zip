/**
 * [dfs, 백트래킹]
 * - 특정 지점들을 거쳐야 하는거라 어디서 지점을 체크하고 넘겨야하는지에 대해 오랜시간 고민했다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [N, M] = inputs[0].split(" ").map((v) => +v);
  const grid = [];
  const spots = [];

  // 4방향 탐색을 위한 dx, dy 정의 (상하좌우)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 방문 여부를 기록할 배열
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  // 1. grid와 spots(거쳐야할 지점들의 정보)을 분류한다.
  for (let i = 1; i < inputs.length; i++) {
    if (i <= N) grid.push(inputs[i].split(" ").map((v) => +v));
    else spots.push(inputs[i].split(" ").map((v) => +v - 1));
  }

  // 2. 경로 수 세기
  let answer = 0;
  visited[spots[0][0]][spots[0][1]] = true; // 방문 표시

  //   let records = [];
  const dfs = (x, y, idx) => {
    // records.push(`(${x},${y}): ${idx}`);
    // spots를 전부 돈 경우
    if (idx === spots.length - 1) {
      // spots의 모든 지점을 체크했고,
      if (x === spots[idx][0] && y === spots[idx][1]) {
        // 현재 지점이 도착지와 같다면
        // console.log(`경로를 찾았다! (${x},${y})`)
        answer++;
        return;
      }
    }

    // 현재 지점이 spots의 현재(= idx)지점과 같다면
    else if (x === spots[idx][0] && y === spots[idx][1]) {
      dfs(x, y, idx + 1); // 다음 지점을 찾아 떠난다.
    }

    // 상하좌우로 이동 가능한 곳을 찾는다.
    for (let k = 0; k < 4; k++) {
      let nx = dx[k] + x;
      let ny = dy[k] + y;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        grid[nx][ny] === 0 &&
        !visited[nx][ny]
      ) {
        // 범위 내에 있고, 벽이 아닌 갈 수 있는 길이며, 아직 방문하지 않은 경우
        visited[nx][ny] = true;
        dfs(nx, ny, idx);
        visited[nx][ny] = false; // 백트래킹
      }
    }
    // records.pop();
  };

  dfs(spots[0][0], spots[0][1], 1); // 출발지점에서 다음 타겟 지점은 idx=1인 곳이다.

  return answer;
};

console.log(solution(inputs));
