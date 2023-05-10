"use strict";

/**
 * 이분탐색 문제!
 * - 이분탐색 시 반드시 배열을 정렬해놓고 문제를 풀어야한다.
 * - 각각의 a값이 pivot이 되어 b값들과 비교하면 된다.
 */
const [T, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, inputs) => {
  let index = 0;
  let answer = [];

  const binary_search = (arr, pivot) => {
    let [start, end] = [0, arr.length - 1];
    let cnt = 0;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] < pivot) {
        // b[mid]값이 현재 a값보다 작다면
        cnt = mid + 1; // 조건에 성립하고, mid는 0부터 시작하므로 +1한 값을 cnt에 갱신한다.
        start = mid + 1; // mid값보다 큰 범위도 가능한지 검사해본다.
      } else if (arr[mid] >= pivot) {
        // b[mid]값이 현재 a값보다 크거나 같으면
        end = mid - 1; // mid값보다 작은 범위 중 가능한 값이 있는지 검사해본다.
      }
    }
    // console.log(cnt);
    return cnt;
  };

  for (let t = 0; t < T; t++) {
    // console.log(`\nTestcase is ... ${t}`);
    const [n, m] = inputs[index].split(" ").map((v) => +v);
    const aArr = inputs[index + 1]
      .split(" ")
      .map((v) => +v)
      .sort((a, b) => a - b);
    const bArr = inputs[index + 2]
      .split(" ")
      .map((v) => +v)
      .sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < n; i++) {
      //   console.log(`pivot: ${aArr[i]}`);
      count += binary_search(bArr, aArr[i]);
    }
    answer.push(count);
    index += 3;
  }
  return answer.join("\n");
};

console.log(solution(+T, inputs));
