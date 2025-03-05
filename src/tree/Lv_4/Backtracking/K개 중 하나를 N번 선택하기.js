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

// ----------------------------------------------------------------------
/**
 * 🔍 아름다운 수 | O | 25.03.06 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

// 아름다운 수인지 검사하는 함수
function checkBeautiful() {
  let stack = [];
  combi.forEach((number) => {
    if (stack.length > 0 && stack[stack.length - 1][0] === number) {
      stack[stack.length - 1][1] += 1;
    } else stack.push([number, 1]);
  });

  let isBeautiful = true;
  stack.forEach(([number, count]) => {
    // 아름다운 수의 조건: number와 count가 같거나 반복횟수가 number로 나누어 떨어짐
    // 아름다운 수가 아닐 조건: count % number !== 0
    if (count % number !== 0) {
      isBeautiful = false;
      return isBeautiful;
    }
  });
  // if(isBeautiful) console.log(combi.join("")); // 디버깅용
  return isBeautiful;
}

// 1~4 사이의 정수로만 이루어진 N자리의 가능한 모든 조합을 구하는 함수
let answer = 0;
let combi = [];
function combination(i) {
  // 종료 조건
  if (i === n) {
    if (checkBeautiful()) answer += 1;
    return;
  }

  // 재귀 호출
  for (let num = 1; num <= 4; num++) {
    combi.push(num);
    combination(i + 1);
    combi.pop();
  }
  return;
}

combination(0); // 0번째 자리에 올 숫자부터 정한다.
console.log(answer);
