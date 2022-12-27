"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase(); // 대문자로 변환

function solution(input) {
  const result = Array.from({ length: 26 }, () => 0); // 알파벳의 개수를 저장할 배열
  for (let x of input) {
    // charCodeAt()은 해당 값에 대한 유니코드를 반환한다.
    // A.charCodeAt() === 65. A가 나왔을 때 0번 인덱스에 저장되게 하기 위해 -65를 한다.
    result[x.charCodeAt() - 65]++;
  }

  const max = Math.max(...result); // 최댓값을 max에 저장한다.
  const index = result.indexOf(max); // 최댓값을 가지는 max의 가장 맨 앞 index값을 저장한다.
  let flag = false; // 중복이 있는지 없는지에 대한 정보를 저장하는 변수

  for (let i = 0; i < result.length; i++) {
    if (result[i] === max && index !== i) {
      // result[i]값이 max와 같고 i가 index와 다르면 중복이 있다는 뜻
      flag = true;
      break; // 더이상 돌 필요가 없으므로 멈춘다.
    }
  }
  return flag ? "?" : String.fromCharCode(index + 65);
}

console.log(solution(input));
