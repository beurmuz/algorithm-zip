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
  const nums = cases.map((c) => {
    let info = c.split(" ").map((v) => +v);
    // [info[1], info[2]]는 목표 칸을 의미한다. index가 0부터 시작이므로 -1씩 해준다.
    info[1] -= 1;
    info[2] -= 1;
    // 옮기려는 숫자가 어느 위치에 있는지 찾아서 row, col 순서대로 info에 push한다.
    // row: 타겟 숫자를 N으로 나눈 몫이 row값이 된다. 단, index를 맞추기 위해 타겟 숫자에 -1을 해준 후 계산해야 한다.
    // col: 타겟 숫자를 N으로 나눈 나머지 값이 col값이 된다.
    info.push(Math.floor((info[0] - 1) / N));
    info.push((info[0] - 1) % N);
    return info;
  });

  // nums를 순회하면서 회전 수를 카운트 한다.
  for (let i = 0; i < nums.length; i++) {
    const [target, tr, tc, cr, cc] = nums[i]; // [타겟넘버, 목표 행, 목표 열, 현재 행, 현재 열]

    let turnCnt = 0; // 총 회전 횟수
    // 목표 행(열)이 현재 행(열)보다 작은 경우, 한바퀴 돌아야 하므로 (N + 목표 행(열)) - 현재 행(열)을 해주면 된다.
    const rowTurn = tr < cr ? N + tr - cr : tr - cr;
    const colTurn = tc < cc ? N + tc - cc : tc - cc;
    turnCnt += rowTurn + colTurn; // 현재 k의 회전 횟수를 구한 것.

    // 현재 target값은 다음에 찾아야 할 target값들에게 영향을 미친다.
    // 그러므로 남은 target들이 현재 target과 관련되어 있는지 체크하고, 관련되어 있다면 위치를 바꿔주어야 한다.
    for (let j = i + 1; j < nums.length; j++) {
      const [nextTarget, nextTr, nextTc, nextCr, nextCc] = nums[j];

      if (nextTarget === target) {
        // 다음 회전 때 같은 수를 회전시킨다면, (현재 타겟 숫자 === 다음 타겟 숫자)
        // [j][3]: 다음 타겟의 현재 row, [j][4]: 다음 타겟의 현재 col값을, 현재 이동한 최종 위치로 변경해준다.
        nums[j][3] = tr;
        nums[j][4] = tc;
      } else if (nextCr === cr) {
        // 다음 타겟 숫자의 현재 col 위치가, 방금 이동시킨 현재 col와 같다면
        // [j][4]: 다음 타겟의 현재 col. 이 값에 col 턴 횟수를 더해준다. (턴한 만큼 자리를 옮겨주는 것이다.)
        nums[j][4] += colTurn;
        if (nums[j][4] >= N) nums[j][4] = nums[j][4] % N;
      } else if (nextCc === tc) {
        // 다음 타겟 숫자의 현재 row 위치가, 방금 이동시킨 열의 위치와 같다면
        nums[j][3] += rowTurn;
        if (nums[j][3] >= N) nums[j][3] = nums[j][3] % N;
      }
    }
    console.log(turnCnt);
  }
};

solution(input, cases);
