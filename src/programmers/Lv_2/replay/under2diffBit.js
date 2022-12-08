"use strict";

function solution(numbers) {
  let answer = [];
  numbers.forEach((now) => {
    if (now % 2 === 0) answer.push(now + 1);
    else {
      now = "0" + now.toString(2);
      let nowLength = now.length;

      for (let i = nowLength; i >= 0; i--) {
        if (+now[i] === 0) {
          answer.push(
            parseInt(
              now.substring(0, i) + "10" + now.substring(i + 2, nowLength),
              2
            )
          );
          break; // 찾으면 바로 종료
        }
      }
    }
  });
  return answer;
}

console.log(solution([2, 7]));
