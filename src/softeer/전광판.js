"use strict";

const [T, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, inputs) => {
  let answer = [];
  const nums = {
    0: "1110111",
    1: "0010010",
    2: "1011101",
    3: "1011011",
    4: "0111010",
    5: "1101011",
    6: "1101111",
    7: "1110010",
    8: "1111111",
    9: "1111011",
    " ": "0000000",
  };

  for (let t = 0; t < T; t++) {
    let [A, B] = inputs[t].split(" ");

    // 자릿수 맞추기
    A = (" ".repeat(5 - A.length) + A).split("");
    B = (" ".repeat(5 - B.length) + B).split("");

    let total = 0;
    for (let i = 0; i < 5; i++) {
      // console.log(`---A: ${A}, 현재 비교값: ${A[i]}, 여기 값은: ${nums[A[i]]}`);
      // console.log(`---B: ${B}, 현재 비교값: ${B[i]}, 여기 값은: ${nums[B[i]]}`);
      for (let j = 0; j < 7; j++) {
        if (nums[A[i]][j] != nums[B[i]][j]) {
          total += 1;
        }
        //   console.log(`A: ${nums[+A[i]][j]} // B: ${nums[+B[i]][j]}`);
      }
    }
    answer.push(total);
  }
  return answer.join("\n");
};

console.log(solution(+T, inputs));
