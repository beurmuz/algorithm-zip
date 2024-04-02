/**
 * [단순 구현, 수학]
 * - 주얼리의 무게 당 가격임을.. 알지 못하고 있어서 왜 jewel[i][0] * jewel[i][1]를 해야하는지 모르고 있었다.
 */

const [input, ...jewel] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, jewel) => {
  let [W, N] = input.split(" ").map((v) => +v);
  jewel = jewel
    .map((line) => line.split(" ").map((v) => +v))
    .sort((a, b) => b[1] - a[1]); // 무게 당 가격을 기준으로 내림차순 정렬

  let total = 0;

  for (let i = 0; i < N; i++) {
    if (W > jewel[i][0]) {
      // 현재 주얼리의 무게가 W보다 작다면
      total += jewel[i][0] * jewel[i][1]; // 주얼리의 무게 * 무게 당 가격
      W -= jewel[i][0];
    } else {
      total += W * jewel[i][1]; // 남은 W만큼 보석을 잘라낸 무게 * 무게 당 가격
      break;
    }
  }
  return total;
};

console.log(solution(input, jewel));
