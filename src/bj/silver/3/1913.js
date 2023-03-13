"use strict";

/**
 * 🚨🚨🚨 달팽이 문제
 * - (1, 1)부터 시작해서 반시계 방향으로 배열을 만들어 간다.
 * - 만들다가 해당 숫자가 나오면 좌표를 출력한다.
 * - 배열이 완성되면 배열, 좌표를 출력한다.
 */
const [N, findNum] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => +v);

const solution = (N, findNum) => {
  const dx = [0, 1, 0, -1]; // ↓, →, ↑, ← 반시계 방향
  const dy = [1, 0, -1, 0]; // ↓, →, ↑, ← 반시계 방향
  const table = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  let findLocation = { x: 0, y: 0 };

  const makeTable = (table, N) => {
    let count = N * N; // 총 수는 격자 크기만큼이다.
    let [x, y] = [0, 0]; // x=0, y=0
    let nowPos = 0; // 현재 position은 0으로 초기화해놓는다. 이는 위에서 아래로 가는 방향이다.
    let moveCount = N; // 움직이는 횟수는 N과 같다. (한줄씩 따져봤을 때)
    while (count !== 0) {
      if (nowPos === 1) moveCount--; // nowPos가 1이면, 아래로 내려가다가 오른쪽으로 꺾는 지점이다. 이 지점에서는 이미 한 줄을 사용했으니 moveCount - 1한 만큼만 움직이면 된다.
      if (nowPos === 3) moveCount--; // nowPos가 3이면, 위에서 올라가다가 왼쪽으로 꺾는 지점이다. 이 지점또한 이미 한 줄을 사용했으니 moveCout - 1한 만큼 움직이게끔 해야한다.

      for (let i = 0; i < moveCount; i++) {
        // moveCount만큼 움직인다.
        x = x + dx[nowPos]; // nowPos는 계속 같은 방향을 보고있다.
        y = y + dy[nowPos];
        table[x][y] = count--; // count를 저장하고, 1 감소시킨다.
        if (table[x][y] === findNum) findLocation = { x, y }; // table[x][y]의 값이 findNum의 값과 같으면, 해당 위치 정보를 저장한다.
      }
      // 방향 전환이 필요할 때이므로, nowPos의 값을 갱신한다.
      nowPos = (nowPos + 1) % 4;
    }
  };

  makeTable(table, N);

  // 출력하기
  for (let y = 1; y < N + 1; y++) {
    let line = "";
    for (let x = 0; x < N; x++) {
      if (x === N - 1) {
        line += table[x][y];
        break;
      }
      line += table[x][y] + " ";
    }
    console.log(line);
  }
  console.log(findLocation.y, findLocation.x + 1);
};

solution(N, findNum);
