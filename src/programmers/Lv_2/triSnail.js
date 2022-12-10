"use strict";

/*
    - 모르겠어서 풀이 참고
    - 풀이법
    1. 3부분으로 나눠 해당 위치의 값을 저장하기
        - 위 -> 아래 (대각선)
        - 왼 -> 오
        - 아래 -> 위 (대각선)
    2. 해당 작업을 n의 값이 유효할 때까지 반복
*/

function solution(n) {
  let answer = [];
  let count = 0;
  let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let currentX = -1;
  let currentY = 0;
  while (n > 0) {
    // n의 값이 유효할 때까지 반복
    for (let i = 0; i < n; i++) {
      // 위에서 아래로 내려가는 대각선
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      // 왼쪽에서 오른쪽으로 이동
      currentY++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      // 아래에서 위로 내려가는 대각선
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3;
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}

console.log(solution(4));

// 2. 다른 풀이
function solution(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  let row = -1;
  let col = 0;
  let fill = 0;
  for (let i = n; i > 0; i -= 3) {
    a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
  }
  return a.flat();
}
