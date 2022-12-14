"use strict";

// 1. 내가 풀려고 한 방법과 비슷한 풀이법
/*
    처음엔 Map으로 set하고 get하는 방식으로 풀었는데 가지고있는 개수가 다른 경우 어떻게 처리할지 잘 모르겠어서 해설을 찾아봄
*/
const solution = (x, y) => {
  let result = "";
  const map = new Map();
  for (let i = 0; i < y.length; i++) {
    map.set(y[i], (map.get(y[i]) || 0) + 1);
  }

  for (let i = 0; i < x.length; i++) {
    if (map.get(x[i]) >= 1) {
      map.set(x[i], (map.get(x[i]) || 0) - 1);
      result += x[i];
    }
  }

  if (result.length < 1) return "-1";
  return +result === 0
    ? "0"
    : result
        .split("")
        .sort((a, b) => b - a)
        .join("");
};

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));

// 2. filter를 이용한 풀이법
function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";

  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
