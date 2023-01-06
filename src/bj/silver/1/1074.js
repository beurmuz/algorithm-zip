"use strict";

// const [N, r, c] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((v) => +v);

/**
 * 못풀었다!
 * - 분할 정복으로 풀면 되는
 */
const solution = (N, r, c) => {
  let order = 0;
  console.log(`Search The (${r}, ${c})`);

  const divide = (row, col, size) => {
    console.log(`row: ${row}, ${col}, size: ${size}, order: ${order}`);
    if (row === r && col === c) {
      // row가 r과 같고, col이 c와 같은 경우 (= 좌표를 찾은 경우)
      console.log(order);
      return;
    }
    if (r >= row && r < row + size && c >= col && c < col + size) {
      // size만큼 더한 값보다 작고 ... 범위 내에 있는 경우
      size = parseInt(size / 2); // 절반으로 분할함
      divide(row, col, size); // 2사분면; 첫번째 꼭짓점 위치
      divide(row, col + size, size); // 1사분면; 두번째 꼭짓점 위치
      divide(row + size, col, size); // 3사분면; 세번째 꼭짓점 위치
      divide(row + size, col + size, size); // 4사분면; 네번째 꼭짓점 위치
    } else {
      // 범위를 벗어난 경우 size * size를 한다.
      order += size * size; // 좌표를 못찾은 경우
    }
  };
  divide(0, 0, 2 ** N);
};

// solution(N, r, c);
solution(2, 3, 1);
