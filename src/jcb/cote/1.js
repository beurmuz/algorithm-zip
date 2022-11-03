"use strict";

function solution(data) {
  let answer = "";
  for (let x of data) {
    let transform = x.replace(/ /g, "").replace(/\+/g, 1).replace(/-/g, 0);
    let changeInt = parseInt(transform, 2);
    let changeString = String.fromCharCode(changeInt);
    answer += changeString;
  }
  return answer;
}

let data = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -   ",
  "   + - + - + - +   ",
];

console.log(solution(data));
