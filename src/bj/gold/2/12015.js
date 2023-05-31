"use strict";

/**
 * [이분 탐색, LIS 알고리즘 문제]
 * - 시간복잡도가 O(n log n)이 나와야한다.
 */
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

/**
 * 처음에 푼 풀이 (틀린 코드)
 * - 일단 입력값이 10^6이길래 반복문 하나로 O(n) 시간복잡도인 코드를 짜보았다. 그랬더니 바로 틀리는 마법 😅
 */
const solution = (n, arr) => {
  let answer = 1;
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (pivot <= arr[i]) {
      answer++;
      pivot = arr[i];
    }
  }
  return answer;
};

console.log(solution(n, arr));

/**
 * 다시 푼 풀이 (정답 코드)
 * - LIS 알고리즘을 이용한다. (이분 탐색)
 */
const solution1 = (n, arr) => {
  const result = [arr[0]];

  function binarySearch(result, arr, i) {
    let [left, right] = [0, result.length - 1];

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (result[mid] < arr[i]) left = mid + 1;
      else if (result[mid] > arr[i]) right = mid;
      else return mid;
    }
    return right;
  }

  for (let i = 1; i < n; i++) {
    if (result[result.length - 1] < arr[i]) {
      result.push(arr[i]);
      continue;
    }

    const idx = binarySearch(result, arr, i);
    result[idx] = arr[i];
  }
  return result.length;
};

console.log(solution1(n, arr));
