// ----------------------------------------------------------------------
/**
 * 🔍 순 간 이 동 | O | 24.08.27
 */
const [a, b, x, y] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Number.MAX_SAFE_INTEGER;

// 1. a -> b
answer = Math.min(answer, Math.abs(a - b));

// 2. a -> x -> y -> b
answer = Math.min(answer, Math.abs(a - x) + Math.abs(y - b));

// 3. a -> y -> x -> b
answer = Math.min(answer, Math.abs(a - y) + Math.abs(x - b));
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️연속된 숫자 만들기 2⭐️ | O | 24.08.28
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Number.MAX_SAFE_INTEGER;

// 1. 세 사람의 위치가 전부 연속한 경우
if (arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]) console.log(0);
// 2. 1을 만족하지 않으면서, 주어진 두 사람의 위치가 정확히 2 차이나는 경우가 있는 경우
//    -> 2차이 나는 두 숫자 사이에 나머지 하나의 숫자를 넣으면 되므로, 최소 이동 횟수는 1이 된다.
else if (arr[0] + 2 === arr[1] || arr[1] + 2 === arr[2]) console.log(1);
// 3. 1과 2 모두 만족하지 않는 경우
//    -> 항상 2번에 걸쳐 3개의 숫자를 연속하게 만드는 것이 가능함
//    -> 양쪽 끝에 있는 숫자 중 하나를 가운데 숫자와 거리가 2가 되도록 먼저 옮긴 뒤,
//    -> 그 다음 나머지 숫자를 가운데에 넣어주면 됨
else console.log(2);
