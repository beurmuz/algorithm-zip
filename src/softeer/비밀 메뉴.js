/**
 * [구현]
 */

// 처음 풀이 - (TC 60개 중 9개 오답)
// keyPad[keyPad.length-1]과 현재 userPad[i]값이 같다면 keyPad를 pop하여 문제를 풀었다.
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [M, N, K] = inputs[0].split(" ").map((v) => +v);
  const keyPad = inputs[1].split(" ").map((v) => +v);
  const userPad = inputs[2].split(" ").map((v) => +v);

  for (let i = N - 1; i >= 0; i--) {
    if (keyPad[keyPad.length - 1] === userPad[i]) keyPad.pop();
    if (keyPad.length === 0) return "secret";
  }
  return "normal";
};

console.log(solution(inputs));

// 두번째 정답 풀이 - (모든 TC 통과)
// keyPad가 모두 연속적으로 눌려야 한다는 사실을 미처 간과해 틀렸다. 간단히 includes로 해결했다.
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [M, N, K] = inputs[0].split(" ").map((v) => +v);
  const keyPad = inputs[1].split(" ").join("");
  const userPad = inputs[2].split(" ").join("");

  if (userPad.includes(keyPad)) return "secret";
  else return "normal";
};

console.log(solution(inputs));
