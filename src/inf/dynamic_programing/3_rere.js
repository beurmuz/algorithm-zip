"use strict";

function solution(n, arr) {
  let answer = 0;
  let dy = Array.from({ length: n }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      // arr[i]가 증가수열의 최댓값이므로, arr[i]보다 작은 값이어야 수열을 늘릴 수 있음
      if (arr[j] < arr[i] && dy[j] > max) {
        // 만들 수 있는 수열의 수를 저장한 dy에서 최댓값을 찾아야함
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]); // 최대 길이를 계속 갱신
  }
  console.log(...dy);
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(8, arr));
