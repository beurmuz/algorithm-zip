"use strict";

function solution(arr, m) {
  let answer = [];
  let checkArray = Array.from({ length: arr.length }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function dfs(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checkArray[i] === 0) {
          checkArray[i] = 1;
          tmp[L] = arr[i];
          dfs(L + 1);
          checkArray[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(arr, 2));

/*
    순열과 조합은 외우다시피 해야함!
    - 체크 배열, tmp배열을 추가로 만들어야 함
    - 체크 배열을 통해 중복을 검사
        - 체크 배열의 해당 값이 1이면 체크(사용)된 것이고, 0이면 사용할 수 있는 것을 의미함
*/
