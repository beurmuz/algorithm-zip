/**
 * [배열 뒤집기, 연산을 이용한 구현 문제]
 * - 우선 표가 N*N이라서 최악의 경우 10000*10000이 되어 int형(4byte)을 1억개 저장해야한다.
 *   -> 그럼 400000000byte가 되므로 400MB가 되어 메모리 제한을 초과한다. O(n^2)은 불가능하므로 배열을 다 돌리고 바꾸는 그런 시뮬레이션도 불가능!
 *   => 핵심은 '자리 이동이 있는 애들만 저장하기'이다.
 *
 * - 회전 횟수는 덧셈, 뺄셈으로 구할 수 있으며 필요한 인덱스만 저장해야한다.
 *  => 회전 시킨 후 회전 예정인 수들(즉, 같은 수 or 같은 열 or 같은 행)이 영향을 받는다.
 */

const [input, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, cases) => {
  const [N, K] = input.split(" ").map((v) => +v);
  const kCases = cases.map((line) => {
    let lineInfo = line.split(" ").map((v) => +v);
    lineInfo[1] -= 1; // row
    lineInfo[2] -= 1; // column
    lineInfo.push(Math.floor(lineInfo[0] - 1 / N)); // 현재 숫자가 있는 row 위치
    lineInfo.push((lineInfo[0] - 1) % N); // 현재 숫자가 있는 column 위치
    return lineInfo;
  });

  for (let i = 0; i < K; i++) {
    const [target, targetRow, targetCol, nowRow, nowCol] = kCases[i]; // [타겟 넘버, 목표 행, 목표 열, 현재 행, 현재 열]

    let turnCount = 0; // 회전 횟수
    const rowTurn =
      targetRow < nowRow ? N + targetRow - nowRow : targetRow - nowRow;
    const colTurn =
      targetCol < nowCol ? N + targetCol - nowCol : targetCol - nowCol;
    turnCount += rowTurn + colTurn;

    for (let j = i + 1; j < K; j++) {
      // 나머지 관련 수들의 현재 인덱스값을 변경해주어야 한다.
      const [nextNum, nextTr, nextTc, nextNr, nextNc] = kCases[j];

      if (nextNum === target) {
        // 다음 회전에 같은 수를 이동 시킨다면, 현재 위치를 이동한 위치로 변경해준다.
        kCases[j][3] = targetRow;
        kCases[j][4] = targetCol;
      } else if (nextNr === nowRow) {
        // 다음 회전에 이동 시킬 수의 행이 이전에 이동시킨 행과 같다면
        kCases[j][4] += colTurn;
        if (kCases[j][4] >= N) kCases[j][4] = kCases[j][4] % N;
      } else if (nextNc === targetCol) {
        // 다음 회전에 이동 시킬 수의 열이 이전에 이동시킨 열과 같다면
        kCases[j][3] += rowTurn;
        if (kCases[j][3] >= N) kCases[j][3] = kCases[j][3] % N;
      }
    }
    console.log(turnCount);
  }
};

solution(input, cases);
