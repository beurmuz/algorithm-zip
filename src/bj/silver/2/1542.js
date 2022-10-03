"use strict";

/*
    처음에는 (+,-)를 기준으로 split한 후 반복문으로 더했다 빼면서 min값을 찾으려 했다.
    그러나 도통 아이디어가 떠오르지 않아 검색해보니 '-'를 기준으로 split한 후 다른 값들을 연산하고, -로 빼주면 된다고 한다.
*/
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let arr = input.split("-").map((num) => {
  let numSplit = num.split("+");
  if (numSplit.length === 1) {
    return +num;
  } else {
    let tmp = 0;
    for (let x of numSplit) {
      tmp += +x;
    }
    return tmp;
  }
});

let answer = arr[0];
for (let i = 1; i < arr.length; i++) {
  answer -= arr[i];
}

console.log(answer);

// 같은 풀이, 다른 코드
/*
    - 값이 최소가 되는 방법은 모든 + 연산자를 처리하고, 다음으로 - 연산자를 처리하는 것이다.
*/
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
function solution(input) {
  const numbers = input.split("-").map((str) =>
    str
      .split("+")
      .map(Number)
      .reduce((s, v) => s + v, 0)
  );
  let answer = 2 * numbers[0] - numbers.reduce((s, v) => s + v, 0);
  return answer;
}
console.log(solution(input));
