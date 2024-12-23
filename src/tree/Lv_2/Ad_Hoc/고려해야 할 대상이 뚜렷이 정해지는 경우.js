// ----------------------------------------------------------------------
/**
 * 🔍 A, B, C 찾기 | O | 24.12.23
 * - 가장 큰 값이 A+B+C라는 점을 이용해서 풀면 된다.
 * - A, B, C를 결정짓는 방법은 오름차순 순서이다. (A <= B <= C)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 가장 큰 값이 A+B+C
const totalSum = inputs.pop();

// 적절히 더해서 11이 되는 값들이 A, B, C가 된다.
let flag = true;
for (let i = 0; i < inputs.length; i++) {
  for (let j = i + 1; j < inputs.length; j++) {
    for (let k = j + 1; k < inputs.length; k++) {
      if (inputs[i] + inputs[j] + inputs[k] === totalSum) {
        console.log(inputs[i], inputs[j], inputs[k]);
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }
  if (!flag) break;
}
