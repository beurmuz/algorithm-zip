const [input, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, cases) => {
  const [n, k] = input.split(" ").map((v) => +v);
  const nums = cases.map((c) => {
    let info = c.split(" ").map((v) => +v);
    info[1] -= 1;
    info[2] -= 1;
    info.push(Math.floor((info[0] - 1) / n));
    info.push((info[0] - 1) % n);
    return info;
  });

  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    const [tNum, tR, tC, nR, nC] = nums[i];

    // row, col 방향으로 회전하는 각각의 횟수를 구한 후, totalTurn에 더해준다.
    let totalTurn = 0;
    let rowTurn = tR < nR ? n + tR - nR : tR - nR;
    let colTurn = tC < nC ? n + tC - nC : tC - nC;
    // console.log(`row: ${rowTurn}, col: ${colTurn}`);
    totalTurn += rowTurn + colTurn;

    // 현재 타켓 숫자의 위치가 바뀌었으므로, 이로 인해 연관된 값들(함께 위치가 변한 값들)도 자리를 옮겨주어야 한다.
    // 연관된 숫자들은 같은 숫자이거나 | 같은 행에 있었거나 | 같은 열에 있었던 것들을 의미한다.
    for (let j = i + 1; j < nums.length; j++) {
      //   console.log(`Next ---- ${nums[j]}`);
      let [nNum, ntR, ntC, nnR, nnC] = nums[j]; // 다음에 탐색해야할 숫자, 타겟 위치, 현재 위치

      if (tNum === nNum) {
        // 같은 숫자라면 (nnR, nnC)를 (tR, tC)로 바꿔준다.
        nums[j][3] = tR;
        nums[j][4] = tC;
      } else if (nR === nnR) {
        // 같은 행에 있었다면 (= 기존의 행(nR)과 다음 숫자의 현재 행(nnR)이 같으면 같은 행에 있는 것)
        // 같은 행에 있었던 값은 row가 아닌 colCnt 만큼 이동해야한다. (= 열만 움직이면 된다.)
        nums[j][4] += colTurn;
        if (nums[j][4] >= n) nums[j][4] = nums[j][4] % n;
      } else if (tC === nnC) {
        // 같은 열에 있었다면 (= 현재 타겟 숫자의 타겟col(tC)과 다음 숫자의 현재 열(nnC)이 같다면 같은 열에 있는 것)
        // 같은 열에 있었던 값은 col이 아닌 rowCnt만큼 이동해야 한다. (= 행만 움직이면 된다.)
        nums[j][3] += rowTurn;
        if (nums[j][3] >= n) nums[j][3] = nums[j][3] % n;
      }
      //   console.log(`changed ---- ${nums[j]}`);
    }
    console.log(totalTurn);
  }
};

solution(input, cases);
