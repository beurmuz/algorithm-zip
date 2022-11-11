"use strict";

function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((sum, x) => sum + x, 0); // (0으로 초기화 후) 총 합을 구해준다.

  function dfs(L, sum) {
    if (flag) return;
    if (L === arr.length) {
      // 0~(5+1)까지 모두 탐색한 후
      if (total - sum === sum) {
        // total - sum을 한 값이 남은 sum과 같으면, 두 부분집합의 합이 같은 것
        answer = "YES";
        flag = 1;
      }
    } else {
      // 왼쪽 (포함하는 경우)
      dfs(L + 1, sum + arr[L]); // 현재 값을 sum에 더하면서 다음 노드(L+1)로 이동
      // 오른쪽 (포함하지 않는 경우)
      dfs(L + 1, sum); // 현재 값은 sum에 더하지 않고 그대로 넘기면서 다음 노드(L+1)로 이동
    }
  }
  dfs(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
