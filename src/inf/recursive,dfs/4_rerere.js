"use strict";
// 부분집합 구하기

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function dfs(v) {
    if (v === n + 1) {
      // 종착점. 부분집합이 하나 완성됨
      let value = "";
      for (let i = 1; i <= n; i++) {
        // ch 배열의 값이 1인 것만 찾기
        if (ch[i] === 1) value += i + "";
      }
      if (value.length > 0) answer.push(value.trim()); // value의 길이가 0보다 클 때에만 answer에 넣으므로써 공집합 출력을 막음
    } else {
      ch[v] = 1; // v를 포함한 경우
      dfs(v + 1); // 왼쪽(포함하는 경우)
      ch[v] = 0; // v를 포함하지 않는 경우
      dfs(v + 1); // 오른쪽(포함하지 않는 경우)
    }
  }
  dfs(1);
  return answer;
}

console.log(solution(3));
