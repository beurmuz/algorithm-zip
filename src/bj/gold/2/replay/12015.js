"use strict";

const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  const answer = [arr[0]];
  function binarySearch(answer, arr, i) {
    let [left, right] = [0, answer.length - 1];

    while (left < right) {
      const mid = parseInt((left + right) / 2);

      if (answer[mid] < arr[i]) left = mid + 1;
      else if (answer[mid] > arr[i]) right = mid;
      else return mid;
    }
    return right;
  }

  for (let i = 1; i < N; i++) {
    // arr[i]값이 answer의 맨 마지막 값보다 크다면 answer에 넣는다.
    if (answer[answer.length - 1] < arr[i]) {
      answer.push(arr[i]);
      continue;
    }

    // arr[i]값이 더 작거나 같은 경우에는
    const idx = binarySearch(answer, arr, i); // answer 배열과 arr, i값을 인자로 보내어 idx를 계산한다.
    answer[idx] = arr[i]; // arr[i]의 값을 answer[idx] 자리에 대입한다.
  }

  return answer.length;
};

console.log(solution(N, arr));
