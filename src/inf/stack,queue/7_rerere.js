"use strict";

function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO"; // 필수과목을 다 듣지 않았으므로 NO
  return answer;
}

let need = "CGA";
let plan = "CBDAGE";

console.log(solution(need, plan));
