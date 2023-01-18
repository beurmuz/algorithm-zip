"use strict";

/**
 * S2.유기농 배추 문제랑 유사한 듯 하다.
 * 중요한 건 단지별로 집의 수를 직접 count하는 것인데, 나는 home이라는 전역 변수를 생성해 단지별 집 수를 count했다.
 * 재귀함수 같은 경우에는 연결되어있는 모든 곳을 한번에 탐색하므로, 전역변수로 count할 수 있는 것이다.
 *
 * ✅ dfs 코드를 작성할 때, 종료 조건이 필요없는 경우가 있다. => 바로 지금!
 * ✅ 어차피 모든 지점을 다 돌아야하는 경우에는 종료 조건을 따로 주지 않아도 된다.
 * ✅ 몇 개만 사용한다던가, 몇 번까지만 탐색할 수 있는 경우에는 if-else로 종료조건을 만들어야 한다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  // map 생성하기
  const map = inputs.map((v) => v.split("").map((vv) => +vv));
  let homeCount = []; // 단지별 집의 수를 저장할 배열
  let home = 0; // 단지별 집의 수

  const dfs = (x, y) => {
    map[x][y] = 0; // 방문 했으니 현재 값을 0으로 바꾼다.
    home += 1; // 방문 했으니 집의 수를 +1 해준다.
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    for (let k = 0; k < 4; k++) {
      // 위, 오른쪽, 아래, 왼쪽 순서로 탐색한다.
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < n && ny < n && map[nx][ny] === 1) {
        // 범위 내에 있고, 아직 방문하지 않았다면 해당 지점을 탐색하러 간다.
        dfs(nx, ny);
      }
    }
  };

  // 단지를 찾으러 가자~
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (map[x][y] === 1) {
        dfs(x, y);
        homeCount.push(home); // 전역변수로 센 집 수를 homeCount에 push하고
        home = 0; // 다시 0으로 초기화해준다.
      }
    }
  }
  console.log(homeCount.length);
  console.log(homeCount.sort((a, b) => a - b).join("\n")); // 오름차순으로 출력해야하므로 정렬 후 join한다.
};

solution(+n, inputs);
