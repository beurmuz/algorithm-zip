"use strict";

const n = +require("fs").readFileSync("/dev/stdin").toString().trim();

/**
 * 제대로 이해하지 못했다.
 * https://chichoon.tistory.com/410
 * 풀이를 봐도 잘 이해가 안가는디요..!
 */
const solution = (n) => {
  const recursiveStar = (n) => {
    if (n === 3) return ["  *  ", " * * ", "*****"];
    const result = recursiveStar(n / 2);
    let arr = [];
    for (let j of result) arr.push(" ".repeat(n / 2) + j + " ".repeat(n / 2));
    for (let j of result) arr.push(j + " " + j);
    return arr;
  };
  return recursiveStar(n).join("\n");
};

console.log(solution(n));
