// ----------------------------------------------------------------------
/**
 * 🔍 K개 중에 1개를 N번 뽑기 | O | 25.03.05 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [k, n] = input[0].split(" ").map(Number);

let answer = [];
function recursive(i) {
  // 종료 조건
  if (i === n) {
    console.log(answer.join(" "));
    return;
  }

  // 재귀 호출 부분
  for (let num = 1; num <= k; num++) {
    answer.push(num);
    recursive(i + 1);
    answer.pop();
  }
  return;
}

recursive(0); // 0번째 자리부터 시작!
