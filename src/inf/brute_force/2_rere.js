"use strict";

"use strict";

function isPrime(num) {
  num = num * 1;
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(str) {
  let answer = [];
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].split("").reverse().join("");
    if (isPrime(tmp)) answer.push(tmp * 1);
    else continue;
  }
  return answer;
}

let str = "32 55 62 20 250 370 200 30 100";
console.log(solution(str));
