"use strict";

function solution(n, m, arr) {
  let answer = 0;
  let candidateArr = [];
  for (let i = 1; i <= n; i++) {
    // 4x4 경우의 수 모두 검사하기
    for (let j = 1; j <= m; j++) {
      // i는 멘토, j는 멘티
      let cnt = 0;
      for (let test = 0; test < m; test++) {
        let mento = 0;
        let menti = 0;
        for (let rank = 0; rank < n; rank++) {
          // test는 시험 횟수, rank는 각 시험의 등수
          if (arr[test][rank] === i) mento = rank;
          if (arr[test][rank] === j) menti = rank;
        }
        if (mento < menti) cnt++;
      }
      if (cnt === m) {
        candidateArr.push([i, j]);
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));
