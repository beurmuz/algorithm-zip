/**
 * [수학, 구현]
 */

// 처음에 푼 풀이 (총 35개의 TC 중 31개 통과)
const [K, P, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const old_solution = (K, P, N) => {
  let sum = K;

  for (let i = 0; i < N; i++) {
    sum = (sum * P) % 1000000007;
  }
  return sum;
};

console.log(old_solution(K, P, N));

// 다시 푼 풀이 => 정답!
// ✅ BigInt를 이용하면 Number의 안전한 정수 제한( Number.MAX_SAFE_INTEGER )을 넘어서는 큰 정수값을 안전하게 저장 및 연산할 수 있다.
const [K, P, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => BigInt(+v)); // 모두 BigInt형으로 만들어준다.

const solution = (K, P, N) => {
  let sum = K;

  for (let i = 0; i < N; i++) {
    sum = (sum * P) % BigInt(1000000007);
  }
  return parseInt(sum); // BigInt형이라 n을 없애기 위해 parseInt를 해준다.
};

console.log(solution(K, P, N));
